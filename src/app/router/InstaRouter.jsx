import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '@layout/Layout';

const HomePage = lazy(() => import('@pages/home/Home'))
const PostsPage = lazy(() => import('@pages/explore/explore'))
const CreatePage = lazy(() => import('@pages/create/Create'))
const NotificationsPage = lazy(() => import('@pages/notifications/Notifications'))
const ReelsPage = lazy(() => import('@pages/reels/Reels'))
const SettingsPage = lazy(() => import('@pages/settings/Settings'))
const MessagePage = lazy(() => import('@pages/Message/MessagePage')) 
const ProfilePage = lazy(() => import('@pages/profile/Profile'))
const LoginPage = lazy(() => import('@pages/login/Login'))
const RegisterPage = lazy(() => import('@pages/register/Register'))
const NotFoundPage = lazy(() => import('@pages/error/NotFound'))

const InstaRouter = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '100vh',
              fontSize: '1.5rem',
              fontWeight: '500',
              color: '#555',
              backgroundColor: '#f9f9f9',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                border: '4px solid #ccc',
                borderTop: '4px solid #555',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                marginBottom: '16px',
              }}
            />
            Loading...
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='posts' element={<PostsPage />} />
            <Route path='create' element={<CreatePage />} />
            <Route path='notifications' element={<NotificationsPage />} />
            <Route path='reels' element={<ReelsPage />} />
            <Route path='settings' element={<SettingsPage />} />
            <Route path='message' element={<MessagePage />} />
            <Route path='profile' element={<ProfilePage />} />
            <Route path='auth/login' element={<LoginPage />} />
            <Route path='auth/register' element={<RegisterPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default InstaRouter
