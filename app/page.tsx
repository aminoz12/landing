'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

// Replace with your actual WhatsApp group invite link
const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE'
const GROUP_CODE = 'BZXiHnsUeafKCG1ydlKdHG'

export default function Home() {
  const [copied, setCopied] = useState(false)

  const handleJoinGroup = () => {
    // Try to open WhatsApp app first, fallback to web
    window.open(WHATSAPP_GROUP_LINK, '_blank')
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText(GROUP_CODE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 flex flex-col items-center justify-center px-4 py-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-whatsapp-green mb-4"
        >
          مجموعة واتساب
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-700"
        >
          انضم لأعضاء المجموعة وشارك المحتوى
        </motion.p>
      </motion.div>

      {/* Main CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full max-w-md mb-12"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
          >
            انضم إلى مجموعتنا الآن
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed"
          >
            اضغط على الزر أدناه للانضمام إلى مجموعتنا. سيتم فتح الدعوة مباشرة في تطبيق واتساب إذا كان متاحاً على جهازك، أو في المتصفح إذا كنت تستخدم سطح المكتب.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleJoinGroup}
            className="w-full bg-whatsapp-green hover:bg-whatsapp-dark text-white font-bold py-4 px-8 rounded-xl text-lg md:text-xl flex items-center justify-center gap-3 shadow-lg transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            انضم للمجموعة الآن
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xs md:text-sm text-gray-500 mt-4"
          >
            إذا لم يفتح التطبيق تلقائياً، سيتم توجيهك إلى صفحة الدعوة على الويب.
          </motion.p>
        </div>
      </motion.div>

      {/* Invitation Code Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl font-semibold text-gray-800 mb-4"
          >
            رمز المجموعة
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-between gap-4"
          >
            <code className="text-sm md:text-base font-mono text-gray-800 break-all">
              {GROUP_CODE}
            </code>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCopyCode}
              className="flex-shrink-0 bg-whatsapp-green hover:bg-whatsapp-dark text-white px-4 py-2 rounded-lg text-sm transition-colors"
            >
              {copied ? 'تم النسخ! ✓' : 'نسخ'}
            </motion.button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-xs md:text-sm text-gray-600 leading-relaxed"
          >
            الرابط يفتح مباشرة في تطبيق واتساب، أو في المتصفح إذا كنت تستخدم سطح المكتب.
          </motion.p>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-12 text-center text-sm text-gray-500"
      >
        <p>انضم إلى مجموعتنا وكن جزءاً من مجتمعنا</p>
      </motion.div>
    </main>
  )
}

