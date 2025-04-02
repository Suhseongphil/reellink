'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabase'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // 현재 로그인된 사용자 정보 가져오기
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
      }
    }
    getUser()

    // 인증 상태 변경 감지
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="container">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              ReelLink
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {user.user_metadata?.full_name || user.email}
                </span>
                <button
                  onClick={async () => {
                    await supabase.auth.signOut()
                    window.location.href = '/'
                  }}
                  className="btn btn-secondary text-sm dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login" className="nav-link dark:text-gray-300 dark:hover:text-white">
                  로그인
                </Link>
                <Link href="/join" className="btn btn-primary text-sm dark:bg-blue-600 dark:hover:bg-blue-700">
                  회원가입
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 