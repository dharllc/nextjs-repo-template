import { describe, it, expect } from 'vitest'
import { GET } from '@/app/api/healthcheck/route'
import { NextResponse } from 'next/server'

describe('GET /api/healthcheck', () => {
  it('should return a healthy status', async () => {
    const response = await GET()
    const data = await response.json()

    expect(response).toBeInstanceOf(NextResponse)
    expect(data.status).toBe('healthy')
    expect(data.service).toBe('modelbench-api')
    expect(data.version).toBe('0.1.0')
    expect(data.timestamp).toBeDefined()
  })

  it('should return a valid timestamp', async () => {
    const response = await GET()
    const data = await response.json()

    const timestamp = new Date(data.timestamp)
    expect(timestamp).toBeInstanceOf(Date)
    expect(timestamp.getTime()).not.toBeNaN()
  })
})