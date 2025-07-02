import React from 'react'
import { Card, CardContent } from './ui/card'
import { Laptop } from 'lucide-react'

const WhatYouNeed = () => {
  return (
    <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 mt-20 ">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center font-grotesk text-white">
              What You
              <span className="bg-gradient-to-r from-lathran-green via-lathran-green to-emerald-400 bg-clip-text text-transparent px-3">
                Need
              </span>
              Before the
              <span className="text-lathran-orange px-3">Session</span>
            </h3>
          </div>
          <Card
            className="bg-slate-900/50 border-orange-500/30 backdrop-blur-sm"
            id="checklist"
          >
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-orange-400 font-bold mb-3">Install:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• VS Code</li>
                    <li>• Python 3.11+</li>
                    <li>• Git</li>
                    <li>• Node.js (optional)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-orange-400 font-bold mb-3">Accounts:</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• GitHub</li>
                    <li>• OpenAI API key</li>
                    <li>• Vercel/Replit account</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-white font-medium">
                  <Laptop className="w-5 h-5 inline mr-2" />
                  Bring: A stable internet connection, your laptop, and your
                  coffee ☕
                </p>
                <p className="text-orange-400 mt-2 font-medium">
                  Full setup checklist sent by email after signup
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
  )
}

export default WhatYouNeed