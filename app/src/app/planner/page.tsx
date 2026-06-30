'use client'

import { useEffect, useState } from 'react'

interface Plan {
  id: string
  name: string
  target_date: string | null
  created_at: string
}

export default function PlannerPage() {
  const [plans, setPlans] = useState<Plan[]>([])
  const [name, setName] = useState('')
  const [targetDate, setTargetDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchPlans() {
    const res = await fetch('/api/planner')
    if (res.ok) {
      const { plans } = await res.json()
      setPlans(plans)
    }
  }

  useEffect(() => { fetchPlans() }, [])

  async function createPlan(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const res = await fetch('/api/planner', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, target_date: targetDate || null }),
    })

    setLoading(false)

    if (!res.ok) {
      const data = await res.json()
      setError(data.error || 'Failed to create plan')
      return
    }

    setName('')
    setTargetDate('')
    fetchPlans()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Study Planner</h1>
      <p className="text-gray-500 mb-8">Create study plans and schedule your revision sessions.</p>

      {/* Create plan form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="font-semibold text-gray-900 mb-4">New Study Plan</h2>
        <form onSubmit={createPlan} className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Plan name (e.g. GCSE Maths Revision)"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="date"
            value={targetDate}
            onChange={e => setTargetDate(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-60 whitespace-nowrap"
          >
            {loading ? 'Creating…' : '+ Create Plan'}
          </button>
        </form>
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>

      {/* Plans list */}
      {plans.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-4">📅</div>
          <p className="text-lg font-medium">No study plans yet</p>
          <p className="text-sm mt-1">Create your first plan above to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plans.map(plan => (
            <div key={plan.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900 text-lg">{plan.name}</h3>
              {plan.target_date && (
                <p className="text-sm text-gray-500 mt-1">
                  Target: {new Date(plan.target_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-3">
                Created {new Date(plan.created_at).toLocaleDateString('en-GB')}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}