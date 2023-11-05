import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

interface Database {
    public: {
      Tables: {
        card4sale: {
          Row: {
            class: string
            created_at: string
            id: string
            text: string
            updated_at: string
          }
          Insert: {
            class: string
            created_at?: string
            id?: string
            text: string
            updated_at?: string
          }
          Update: {
            class?: string
            created_at?: string
            id?: string
            text?: string
            updated_at?: string
          }
          Relationships: []
        }
        wishlistcard: {
          Row: {
            created_at: string
            id: string
            name: string
            text: string
            updated_at: string
          }
          Insert: {
            created_at?: string
            id?: string
            name: string
            text: string
            updated_at?: string
          }
          Update: {
            created_at?: string
            id?: string
            name?: string
            text?: string
            updated_at?: string
          }
          Relationships: []
        }
      }
      Views: {
        [_ in never]: never
      }
      Functions: {
        [_ in never]: never
      }
      Enums: {
        [_ in never]: never
      }
      CompositeTypes: {
        [_ in never]: never
      }
    }
  }

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient<Database>({ req, res })
  await supabase.auth.getSession()
  return res
}