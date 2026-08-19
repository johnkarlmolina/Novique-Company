import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, ChevronDown, Clock } from 'lucide-react'

const trustedClients = ['Best-Lolama']

const steps = [
  {
    label: 'About You',
    category: 'Personal Information',
    heading: 'Tell us a bit about yourself',
    description: "We'll use this to reach you about your project.",
  },
  {
    label: 'Business',
    category: 'Business Details',
    heading: 'Share your business context',
    description: 'Help us understand your company so we can align technical decisions to real outcomes.',
  },
  {
    label: 'Challenges',
    category: 'Current Challenges',
    heading: 'What challenges are you facing?',
    description: 'Tell us about blockers in your current systems, product workflow, or customer experience.',
  },
  {
    label: 'Goals',
    category: 'Platform Goals',
    heading: 'Define your platform goals',
    description: 'Choose whether your primary target is Web, Mobile, or a combined product strategy.',
  },
  {
    label: 'Details',
    category: 'Scope & Budget',
    heading: 'Scope and timeline details',
    description: 'Budget and timeline ranges help us shape realistic milestones and delivery tracks.',
  },
  {
    label: 'Schedule',
    category: 'Schedule a Call',
    heading: 'Book your strategy conversation',
    description: 'Pick your preferred call timeline so we can prepare your roadmap before the first session.',
  },
]

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Most engagements run 6 to 16 weeks depending on scope, from focused MVP builds to full platform rebuilds.',
  },
  {
    question: "What's included in the free strategy call?",
    answer: 'A 30-minute session to review your goals, technical constraints, and a rough roadmap before any commitment.',
  },
  {
    question: 'Do you work with early-stage startups?',
    answer: 'Yes — we support everything from first MVPs to scaling platforms for growth-stage companies.',
  },
  {
    question: "What's your pricing model?",
    answer: 'We scope fixed-price milestones for defined projects, or a monthly retainer for ongoing product work.',
  },
  {
    question: 'Do you sign NDAs?',
    answer: 'Absolutely. We can sign your NDA or ours before any detailed discovery call.',
  },
  {
    question: 'What happens after I submit this form?',
    answer: 'Our team reviews your submission and reaches out within 24 hours to schedule your strategy call.',
  },
]

const initialForm = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  company: '',
  industry: '',
  challenges: '',
  platform: '',
  budget: '',
  scope: '',
  timeline: '',
  callTimeline: '',
}

export default function GetStarted() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const currentMeta = useMemo(() => steps[currentStep - 1], [currentStep])

  function updateField(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function validateStep() {
    if (currentStep === 1) {
      return formData.firstName && formData.lastName && formData.phone && formData.email
    }
    if (currentStep === 2) return formData.company
    if (currentStep === 3) return formData.challenges
    if (currentStep === 4) return formData.platform
    if (currentStep === 5) return formData.budget && formData.scope
    if (currentStep === 6) return formData.callTimeline
    return true
  }

  function nextStep() {
    if (!validateStep()) {
      return
    }

    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1)
      return
    }

    console.log('Novique contact form:', formData)
    setSubmitted(true)
  }

  return (
    <div className="space-y-20">
      <header className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">Get Started</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">Let's Build Something Great</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Tell us about your project in a few quick steps and we'll get back to you with a tailored roadmap.
        </p>
      </header>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 lg:flex-row">
        <aside className="relative shrink-0 overflow-hidden rounded-3xl bg-[#0E1B24] p-6 text-white shadow-2xl sm:p-8 lg:w-[320px]">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#C89B3C]/15 blur-3xl" />

          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#C89B3C]/15 p-1.5">
              <img src="/logo-icon.png" alt="Novique logo" className="h-full w-full object-contain" />
            </span>
            <span className="text-lg font-bold">Novique</span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#C89B3C]">
            Step {Math.min(currentStep, 6)} of 6
          </p>
          <h3 className="mt-3 text-2xl font-bold leading-snug">{currentMeta.heading}</h3>
          <p className="mt-3 text-sm text-slate-300">{currentMeta.description}</p>

          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-xs text-slate-400">In partnership with</p>
            <div className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-300">
              {trustedClients.map((client) => (
                <span key={client}>{client}</span>
              ))}
            </div>
          </div>

          <p className="mt-8 flex items-center gap-2 text-xs text-slate-400">
            <Clock className="h-3.5 w-3.5" />
            Takes about 3 minutes · No commitment
          </p>
        </aside>

        <div className="relative w-full rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
          {submitted ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#C89B3C]/10 text-[#C89B3C]">
                <CheckCircle2 className="h-7 w-7" />
              </span>
              <h2 className="mt-5 text-2xl font-extrabold text-slate-900">Request received</h2>
              <p className="mt-2 max-w-sm text-sm text-slate-500">
                Thanks, {formData.firstName || 'there'}. Our team will reach out within 24 hours to schedule your strategy call.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false)
                  setCurrentStep(1)
                  setFormData(initialForm)
                }}
                className="mt-6 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-[#C89B3C]/50 hover:text-[#C89B3C]"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              <div className="relative flex items-start justify-between">
                <div className="absolute left-0 right-0 top-[18px] h-px bg-slate-200" />
                {steps.map((step, idx) => {
                  const stepNumber = idx + 1
                  const active = stepNumber === currentStep
                  const completed = stepNumber < currentStep
                  return (
                    <button
                      type="button"
                      key={step.label}
                      onClick={() => {
                        if (completed || active) setCurrentStep(stepNumber)
                      }}
                      className="relative z-10 flex flex-col items-center gap-2 bg-white px-1"
                    >
                      <span
                        className={
                          active
                            ? 'flex h-9 w-9 items-center justify-center rounded-full bg-[#C89B3C] text-sm font-bold text-white'
                            : completed
                              ? 'flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#C89B3C] text-sm font-bold text-[#C89B3C]'
                              : 'flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-200 text-sm font-semibold text-slate-400'
                        }
                      >
                        {stepNumber}
                      </span>
                      <span
                        className={`hidden text-xs font-semibold sm:block ${
                          active || completed ? 'text-[#C89B3C]' : 'text-slate-400'
                        }`}
                      >
                        {step.label}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="mt-8">
                <span className="inline-flex rounded-full bg-[#C89B3C]/10 px-4 py-1.5 text-sm font-semibold text-[#C89B3C]">
                  {currentMeta.category}
                </span>

                <h2 className="mt-4 text-2xl font-extrabold text-slate-900 sm:text-3xl">{currentMeta.heading}</h2>
                <p className="mt-2 text-sm text-slate-500">{currentMeta.description}</p>
              </div>

              <div className="mt-6 space-y-4">
                {currentStep === 1 && (
                  <>
                    <Field name="firstName" label="First Name" value={formData.firstName} onChange={updateField} required placeholder="Enter your first name" />
                    <Field name="lastName" label="Last Name" value={formData.lastName} onChange={updateField} required placeholder="Enter your last name" />
                    <Field name="phone" label="Phone Number" value={formData.phone} onChange={updateField} required placeholder="Enter your phone number" />
                    <Field name="email" label="Active Email Address" value={formData.email} onChange={updateField} required type="email" placeholder="Enter your email address" />
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <Field name="company" label="Company" value={formData.company} onChange={updateField} required placeholder="Enter your company name" />
                    <Field name="industry" label="Industry" value={formData.industry} onChange={updateField} placeholder="Enter your industry" />
                  </>
                )}

                {currentStep === 3 && (
                  <label className="block rounded-2xl bg-slate-100 px-4 py-3">
                    <span className="block text-xs font-semibold text-slate-500">
                      Current bottlenecks <span className="text-red-500">*</span>
                    </span>
                    <textarea
                      name="challenges"
                      rows="4"
                      value={formData.challenges}
                      onChange={updateField}
                      placeholder="Tell us what's slowing you down"
                      className="mt-1 w-full resize-none bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
                    />
                  </label>
                )}

                {currentStep === 4 && (
                  <div className="grid gap-3 sm:grid-cols-3">
                    {['Web', 'Mobile', 'Both'].map((opt) => (
                      <label
                        key={opt}
                        className={`flex cursor-pointer items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold ${
                          formData.platform === opt ? 'bg-[#C89B3C]/10 text-[#C89B3C]' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <input
                          type="radio"
                          name="platform"
                          value={opt}
                          checked={formData.platform === opt}
                          onChange={updateField}
                          className="accent-[#C89B3C]"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                )}

                {currentStep === 5 && (
                  <>
                    <SelectField
                      name="budget"
                      label="Budget"
                      value={formData.budget}
                      onChange={updateField}
                      options={['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+']}
                    />
                    <SelectField
                      name="scope"
                      label="Scope"
                      value={formData.scope}
                      onChange={updateField}
                      options={['MVP', 'Scale existing product', 'Full platform rebuild']}
                    />
                  </>
                )}

                {currentStep === 6 && (
                  <SelectField
                    name="callTimeline"
                    label="Preferred call timeline"
                    value={formData.callTimeline}
                    onChange={updateField}
                    options={['Within 24 hours', 'This week', 'Next week']}
                  />
                )}
              </div>

              <div className="mt-8 space-y-3 border-t border-slate-100 pt-6">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                    className="text-sm font-semibold text-slate-400 transition hover:text-slate-600"
                  >
                    ← Back
                  </button>
                )}
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C89B3C] py-3.5 text-sm font-bold text-white transition hover:scale-[1.01] hover:shadow-[0_12px_32px_rgba(200,155,60,0.35)]"
                >
                  {currentStep === 6 ? 'Submit Request' : 'Next'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <FaqSection />
    </div>
  )
}

function Field({ name, label, value, onChange, required = false, type = 'text', placeholder }) {
  return (
    <label className="block rounded-2xl bg-slate-100 px-4 py-3">
      <span className="block text-xs font-semibold text-slate-500">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400"
      />
    </label>
  )
}

function SelectField({ name, label, value, onChange, options }) {
  return (
    <label className="block rounded-2xl bg-slate-100 px-4 py-3">
      <span className="block text-xs font-semibold text-slate-500">
        {label} <span className="text-red-500">*</span>
      </span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full bg-transparent text-base text-slate-900 outline-none"
      >
        <option value="">Select one</option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="mx-auto w-full max-w-3xl space-y-8">
      <header className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C89B3C]">FAQs</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
      </header>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div key={faq.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-[#C89B3C] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && <p className="px-5 pb-4 text-sm text-slate-600">{faq.answer}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
