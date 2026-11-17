function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

const RESET_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>'

export function initAssistant({ mountTarget, services, plans, icon, onSelectService }) {
  if (!mountTarget || !Array.isArray(services) || !Array.isArray(plans)) return

  const serviceByTitle = Object.fromEntries(services.map(s => [s.title, s]))
  const planByName = Object.fromEntries(plans.map(p => [p.name, p]))

  const root = document.createElement('aside')
  root.className = 'assistant-root'
  root.setAttribute('aria-label', 'NorthStar Cleaning Service Advisor')

  root.innerHTML = `
    <button
      type="button"
      class="assistant-launcher"
      id="assistantLauncher"
      aria-expanded="false"
      aria-controls="assistantPanel"
      aria-label="Open Service Advisor (Interactive Demo Concept)"
    >
      <span class="assistant-launcher__icon">${icon.sparkles}</span>
      <span>Service Advisor</span>
    </button>

    <section
      class="assistant-panel"
      id="assistantPanel"
      role="dialog"
      aria-modal="false"
      aria-labelledby="assistantTitle"
      hidden
    >
      <header class="assistant-header">
        <div class="assistant-header__title-wrap">
          <h2 class="assistant-header__title" id="assistantTitle">Service Advisor</h2>
          <span class="assistant-header__badge">Interactive Demo Concept</span>
        </div>
        <div class="assistant-header__actions">
          <button
            type="button"
            class="assistant-icon-btn"
            id="assistantReset"
            aria-label="Reset conversation"
            title="Reset conversation"
          >
            ${RESET_ICON}
          </button>
          <button
            type="button"
            class="assistant-icon-btn"
            id="assistantClose"
            aria-label="Close Service Advisor"
            title="Close Service Advisor"
          >
            ${icon.x}
          </button>
        </div>
      </header>

      <div class="assistant-messages" id="assistantMessages" role="log" aria-live="polite" aria-relevant="additions"></div>
      <div class="assistant-actions" id="assistantActions"></div>
    </section>
  `

  mountTarget.appendChild(root)

  const launcher = root.querySelector('#assistantLauncher')
  const panel = root.querySelector('#assistantPanel')
  const resetBtn = root.querySelector('#assistantReset')
  const closeBtn = root.querySelector('#assistantClose')
  const messagesEl = root.querySelector('#assistantMessages')
  const actionsEl = root.querySelector('#assistantActions')

  function renderServiceCard(service) {
    if (!service) return ''
    return `
      <div class="assistant-card">
        <div class="assistant-card__head">
          <span class="assistant-card__title">${escapeHtml(service.title)}</span>
        </div>
        <p class="assistant-card__desc">${escapeHtml(service.desc)}</p>
        <ul class="assistant-card__list">
          ${service.features.map(f => `<li>${icon.checkSmall} <span>${escapeHtml(f)}</span></li>`).join('')}
        </ul>
      </div>
    `
  }

  function renderPlanCard(plan) {
    if (!plan) return ''
    return `
      <div class="assistant-card">
        <div class="assistant-card__head">
          <span class="assistant-card__title">${escapeHtml(plan.name)}${plan.featured ? ' · Most Popular' : ''}</span>
          <span class="assistant-card__price">${escapeHtml(plan.price)} ${escapeHtml(plan.unit)}</span>
        </div>
        <p class="assistant-card__desc">${escapeHtml(plan.desc)}</p>
        <ul class="assistant-card__list">
          ${plan.features.map(f => `<li>${icon.checkSmall} <span>${escapeHtml(f)}</span></li>`).join('')}
        </ul>
      </div>
    `
  }

  function renderDemoDisclaimer(text) {
    return `<div class="assistant-msg__note">${icon.info}<span>${escapeHtml(text)}</span></div>`
  }

  function appendMessage(sender, htmlContent) {
    const wrapper = document.createElement('div')
    wrapper.className = `assistant-msg assistant-msg--${sender}`
    wrapper.innerHTML = `<div class="assistant-msg__bubble">${htmlContent}</div>`
    messagesEl.appendChild(wrapper)
    messagesEl.scrollTop = messagesEl.scrollHeight
  }

  function appendUserMessage(text) {
    appendMessage('user', escapeHtml(text))
  }

  function getStepConfig(step) {
    switch (step) {
      case 'welcome':
        return {
          botHtml: `Hi! I'm the NorthStar Service Advisor. Tell me what you're looking for and I'll guide you to one of our existing services or illustrative plans.`,
          actions: [
            { label: 'Which service do I need?', next: 'choose_service' },
            { label: 'Explore pricing plans', next: 'explore_plans' },
            { label: "What's included?", next: 'whats_included' },
            { label: 'How do I request a quote?', next: 'how_to_quote' },
          ],
        }

      case 'choose_service':
        return {
          botHtml: `What kind of space or cleaning are you looking for?`,
          actions: [
            { label: 'Home cleaning (Residential)', next: 'service_residential' },
            { label: 'Office or workplace (Commercial)', next: 'service_commercial' },
            { label: 'Move-in / intensive (Deep Cleaning)', next: 'service_deep' },
            { label: 'Not sure yet', next: 'service_unsure' },
            { label: 'Back to topics', next: 'welcome', variant: 'subtle' },
          ],
        }

      case 'service_residential': {
        const svc = serviceByTitle['Residential Cleaning']
        return {
          botHtml: `
            <strong>Residential Cleaning</strong> fits routine home upkeep:
            ${renderServiceCard(svc)}
            ${renderDemoDisclaimer('Next step: submit a demonstration inquiry using the quote form below.')}
          `,
          actions: [
            { label: 'Select Residential Cleaning in Quote Form', selectValue: 'Residential Cleaning', variant: 'primary' },
            { label: 'Match a plan by space size', next: 'explore_plans' },
            { label: 'Start over', next: 'welcome', variant: 'subtle' },
          ],
        }
      }

      case 'service_commercial': {
        const svc = serviceByTitle['Commercial Cleaning']
        return {
          botHtml: `
            <strong>Commercial Cleaning</strong> is designed for offices, retail, and workplaces:
            ${renderServiceCard(svc)}
            ${renderDemoDisclaimer('Commercial requests use the quote form to describe your workspace details (demo only).')}
          `,
          actions: [
            { label: 'Select Commercial Cleaning in Quote Form', selectValue: 'Commercial Cleaning', variant: 'primary' },
            { label: 'How do I request a quote?', next: 'how_to_quote' },
            { label: 'Start over', next: 'welcome', variant: 'subtle' },
          ],
        }
      }

      case 'service_deep': {
        const svc = serviceByTitle['Deep Cleaning']
        return {
          botHtml: `
            <strong>Deep Cleaning</strong> is tailored for move-ins, move-outs, or intensive detail:
            ${renderServiceCard(svc)}
            ${renderDemoDisclaimer('For recurring or sized packages, our Professional and Premium plans also include deep clean checklists.')}
          `,
          actions: [
            { label: 'Select Deep Cleaning in Quote Form', selectValue: 'Deep Cleaning', variant: 'primary' },
            { label: 'Match a plan by space size', next: 'explore_plans' },
            { label: 'Start over', next: 'welcome', variant: 'subtle' },
          ],
        }
      }

      case 'service_unsure':
        return {
          botHtml: `
            No problem! You can check our plans by space size, or choose <strong>"Not sure yet"</strong> in the quote form and describe your space in the message field.
            ${renderDemoDisclaimer('The contact form submits a portfolio demonstration request — no real booking is created.')}
          `,
          actions: [
            { label: 'Select "Not sure yet" in Quote Form', selectValue: 'Not sure yet', variant: 'primary' },
            { label: 'Explore pricing plans by size', next: 'explore_plans' },
            { label: 'Start over', next: 'welcome', variant: 'subtle' },
          ],
        }

      case 'explore_plans':
        return {
          botHtml: `
            Our three illustrative plans are organized by space size and checklist scope. How large is your space?
            ${renderDemoDisclaimer('Prices shown are illustrative portfolio concepts, not a guaranteed final quote.')}
          `,
          actions: [
            { label: 'Up to 1,000 sq ft (Essential)', next: 'plan_essential' },
            { label: 'Up to 2,500 sq ft (Professional)', next: 'plan_professional' },
            { label: 'Up to 4,000 sq ft (Premium)', next: 'plan_premium' },
            { label: 'Compare all 3 plans', next: 'compare_plans' },
            { label: 'Back to topics', next: 'welcome', variant: 'subtle' },
          ],
        }

      case 'plan_essential': {
        const plan = planByName['Essential']
        return {
          botHtml: `
            For spaces <strong>up to 1,000 sq ft</strong>, the <strong>Essential</strong> plan fits best:
            ${renderPlanCard(plan)}
            ${renderDemoDisclaimer('Illustrative portfolio pricing — use the form to send a demonstration request.')}
          `,
          actions: [
            { label: 'Select Essential Plan ($89) in Form', selectValue: 'Essential Plan ($89)', variant: 'primary' },
            { label: 'Check another size', next: 'explore_plans' },
            { label: 'Start over', next: 'welcome', variant: 'subtle' },
          ],
        }
      }

      case 'plan_professional': {
        const plan = planByName['Professional']
        return {
          botHtml: `
            For spaces <strong>up to 2,500 sq ft</strong>, the <strong>Professional</strong> plan fits best:
            ${renderPlanCard(plan)}
            ${renderDemoDisclaimer('Illustrative portfolio pricing — use the form to send a demonstration request.')}
          `,
          actions: [
            { label: 'Select Professional Plan ($149) in Form', selectValue: 'Professional Plan ($149)', variant: 'primary' },
            { label: 'Check another size', next: 'explore_plans' },
            { label: 'Start over', next: 'welcome', variant: 'subtle' },
          ],
        }
      }

      case 'plan_premium': {
        const plan = planByName['Premium']
        return {
          botHtml: `
            For large or busy spaces <strong>up to 4,000 sq ft</strong>, the <strong>Premium</strong> plan fits best:
            ${renderPlanCard(plan)}
            ${renderDemoDisclaimer('Illustrative portfolio pricing — use the form to send a demonstration request.')}
          `,
          actions: [
            { label: 'Select Premium Plan ($229) in Form', selectValue: 'Premium Plan ($229)', variant: 'primary' },
            { label: 'Check another size', next: 'explore_plans' },
            { label: 'Start over', next: 'welcome', variant: 'subtle' },
          ],
        }
      }

      case 'compare_plans':
        return {
          botHtml: `
            Here is a quick overview of all three illustrative plans:
            ${plans.map(renderPlanCard).join('')}
            ${renderDemoDisclaimer('Select a size option below to pre-fill that plan in the quote form.')}
          `,
          actions: [
            { label: 'Choose Essential ($89)', selectValue: 'Essential Plan ($89)' },
            { label: 'Choose Professional ($149)', selectValue: 'Professional Plan ($149)' },
            { label: 'Choose Premium ($229)', selectValue: 'Premium Plan ($229)' },
            { label: 'Back to topics', next: 'welcome', variant: 'subtle' },
          ],
        }

      case 'whats_included':
        return {
          botHtml: `Which service checklist or product detail would you like to inspect?`,
          actions: [
            { label: 'Residential checklist', next: 'service_residential' },
            { label: 'Commercial checklist', next: 'service_commercial' },
            { label: 'Deep Cleaning checklist', next: 'service_deep' },
            { label: 'Eco-friendly products & plans', next: 'eco_info' },
            { label: 'Back to topics', next: 'welcome', variant: 'subtle' },
          ],
        }

      case 'eco_info':
        return {
          botHtml: `
            Every NorthStar plan (<strong>Essential</strong>, <strong>Professional</strong>, and <strong>Premium</strong>) includes <strong>eco-friendly products</strong>.
            <br /><br />
            Standard plans scale from <strong>1 cleaning specialist</strong> (up to 1,000 sq ft) to <strong>2 specialists</strong> (up to 2,500 sq ft) and <strong>3 specialists with a dedicated team lead</strong> (up to 4,000 sq ft).
            ${renderDemoDisclaimer('Want a specific checklist? Pick a service or plan to continue.')}
          `,
          actions: [
            { label: 'Explore pricing plans', next: 'explore_plans' },
            { label: 'Which service do I need?', next: 'choose_service' },
            { label: 'Start over', next: 'welcome', variant: 'subtle' },
          ],
        }

      case 'how_to_quote':
        return {
          botHtml: `
            To submit a quote request:
            <ol class="assistant-msg__steps">
              <li>Choose a service or plan (or pick <strong>"Not sure yet"</strong>).</li>
              <li>Enter your <strong>Full Name</strong>, <strong>Email</strong>, optional <strong>Phone</strong>, and a <strong>Message</strong> with your space details.</li>
              <li>Click <strong>Send Request</strong>.</li>
            </ol>
            ${renderDemoDisclaimer('This is an illustrative portfolio concept — submitting the form stores a demo inquiry without sending real emails or confirming a booking.')}
          `,
          actions: [
            { label: 'Go to Quote Form', navigateOnly: true, variant: 'primary' },
            { label: 'Help me choose a service', next: 'choose_service' },
            { label: 'Explore pricing plans', next: 'explore_plans' },
          ],
        }

      default:
        return getStepConfig('welcome')
    }
  }

  function renderActions(actions) {
    actionsEl.innerHTML = ''
    const primaryActions = actions.filter(a => a.variant === 'primary')
    const chipActions = actions.filter(a => a.variant !== 'primary')

    primaryActions.forEach(action => {
      const btn = document.createElement('button')
      btn.type = 'button'
      btn.className = 'assistant-chip assistant-chip--primary'
      btn.innerHTML = `<span>${escapeHtml(action.label)}</span> ${icon.arrowRight}`
      btn.addEventListener('click', () => handleAction(action))
      actionsEl.appendChild(btn)
    })

    if (chipActions.length > 0) {
      const chipsRow = document.createElement('div')
      chipsRow.className = 'assistant-chips'
      chipActions.forEach(action => {
        const btn = document.createElement('button')
        btn.type = 'button'
        btn.className = `assistant-chip${action.variant === 'subtle' ? ' assistant-chip--subtle' : ''}`
        btn.textContent = action.label
        btn.addEventListener('click', () => handleAction(action))
        chipsRow.appendChild(btn)
      })
      actionsEl.appendChild(chipsRow)
    }
  }

  function goToStep(step, userEcho = null) {
    if (userEcho) {
      appendUserMessage(userEcho)
    }
    const config = getStepConfig(step)
    appendMessage('bot', config.botHtml)
    renderActions(config.actions)
  }

  function handleAction(action) {
    if (action.selectValue || action.navigateOnly) {
      closePanel({ restoreFocus: false })
      if (typeof onSelectService === 'function') {
        onSelectService(action.selectValue || null)
      }
      return
    }
    if (action.next) {
      goToStep(action.next, action.label)
    }
  }

  function resetConversation() {
    messagesEl.innerHTML = ''
    goToStep('welcome')
  }

  function openPanel() {
    panel.hidden = false
    launcher.setAttribute('aria-expanded', 'true')
    closeBtn.focus()
  }

  function closePanel({ restoreFocus = true } = {}) {
    if (panel.hidden) return
    panel.hidden = true
    launcher.setAttribute('aria-expanded', 'false')
    if (restoreFocus) {
      launcher.focus()
    }
  }

  launcher.addEventListener('click', () => {
    if (panel.hidden) {
      openPanel()
    } else {
      closePanel({ restoreFocus: true })
    }
  })

  closeBtn.addEventListener('click', () => {
    closePanel({ restoreFocus: true })
  })

  resetBtn.addEventListener('click', () => {
    resetConversation()
  })

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || panel.hidden) return
    const openModal = document.querySelector('.modal-backdrop--open')
    if (openModal) return
    e.stopPropagation()
    closePanel({ restoreFocus: true })
  })

  resetConversation()
}
