'use client';

import React, { useState } from 'react';
import { Form3DCanvas } from '../3d/form/Form3DCanvas';
import { useForm, ValidationError } from '@formspree/react';

export const MultiStepForm: React.FC = () => {
  // 1. Correct Formspree Hook placement at top-level
  const [state, handleSubmit] = useForm('mrpgwppb');

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    serviceType: 'Custom Code (Next.js / 3D)',
    scale: '1', // Controls 3D building scale
    budget: '$25k - $50k',
    customBudget: '',
    isCustomBudget: false,
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  // Determine effective budget to send
  const finalBudget = formData.isCustomBudget
    ? formData.customBudget
      ? `$${formData.customBudget}`
      : 'Custom Budget'
    : formData.budget;

  return (
    <div className="relative w-full min-h-screen bg-[#020804] text-white flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* 3D Reactive Scene in Background */}
      <Form3DCanvas step={step} scaleFactor={parseFloat(formData.scale)} />

      {/* Glassmorphic Form Card Overlay */}
      <div className="relative z-10 w-full max-w-xl bg-black/40 backdrop-blur-xl border border-[#00ff87]/30 rounded-2xl p-6 md:p-10 shadow-2xl shadow-[#00ff87]/10">
        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-8">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 mx-1 rounded-full transition-all duration-500 ${
                i <= step
                  ? 'bg-[#00ff87] shadow-[0_0_10px_#00ff87]'
                  : 'bg-gray-800'
              }`}
            />
          ))}
        </div>

        {!state.succeeded ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden inputs to pass multi-step state data directly to Formspree */}
            <input
              type="hidden"
              name="serviceType"
              value={formData.serviceType}
            />
            <input type="hidden" name="scale" value={formData.scale} />
            <input type="hidden" name="budget" value={finalBudget} />

            {/* STEP 0: Service & Platform Selection */}
            {step === 0 && (
              <div className="space-y-4 animate-fadeIn">
                <span className="text-[#00ff87] text-xs font-mono tracking-widest uppercase">
                  Step 01 / 04
                </span>
                <h2 className="text-2xl font-bold">
                  What platform or service are we building?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Full Architecture + CAD + 3D',
                    'Architecture & Spatial Design',
                    'Interior Design',
                    'Exterior Design',
                    'WordPress / WooCommerce',
                    'Shopify Store',
                    'Wix / Squarespace',
                    'Custom Code (Next.js)', 
                    'Others'                   
                  ].map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() =>
                        setFormData({ ...formData, serviceType: service })
                      }
                      className={`cursor-pointer p-4 text-left rounded-xl border text-sm font-medium transition-all duration-300 ${
                        formData.serviceType === service
                          ? 'border-[#00ff87] bg-[#00ff87]/15 text-white shadow-[0_0_15px_rgba(0,255,135,0.15)]'
                          : 'border-gray-800 bg-black/20 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 1: Project Scale */}
            {step === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <span className="text-[#00ff87] text-xs font-mono tracking-widest uppercase">
                  Step 02 / 04
                </span>
                <h2 className="text-2xl font-bold">
                  Select Project Scale & Complexity
                </h2>
                <p className="text-sm text-gray-400">
                  Notice how the 3D model transforms as you adjust scale.
                </p>

                <div className="space-y-3 pt-2">
                  <label className="text-sm text-gray-300">
                    Building Density / Scale Level
                  </label>
                  <input
                    type="range"
                    min="0.7"
                    max="1.6"
                    step="0.3"
                    value={formData.scale}
                    onChange={(e) =>
                      setFormData({ ...formData, scale: e.target.value })
                    }
                    className="w-full accent-[#00ff87] cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 font-mono">
                    <span>Boutique / Single Space</span>
                    <span>Mid-Scale Complex</span>
                    <span>Enterprise Campus</span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Budget */}
            {step === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <span className="text-[#00ff87] text-xs font-mono tracking-widest uppercase">
                  Step 03 / 04
                </span>
                <h2 className="text-2xl font-bold">Estimated Investment</h2>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[
                    '$10k - $25k',
                    '$25k - $50k',
                    '$50k - $100k',
                    '$100k+',
                  ].map((budget) => (
                    <button
                      type="button"
                      key={budget}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          budget,
                          isCustomBudget: false,
                        })
                      }
                      className={`p-4 text-center rounded-xl border transition-all duration-300 ${
                        !formData.isCustomBudget && formData.budget === budget
                          ? 'border-[#00ff87] bg-[#00ff87]/15 text-white'
                          : 'border-gray-800 bg-black/20 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>

                {/* Custom Budget Toggle & Input */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        isCustomBudget: !formData.isCustomBudget,
                      })
                    }
                    className={`w-full p-3.5 text-center text-sm rounded-xl border transition-all duration-300 ${
                      formData.isCustomBudget
                        ? 'border-[#00ff87] bg-[#00ff87]/15 text-white'
                        : 'border-gray-800 bg-black/20 text-gray-400 hover:border-gray-600'
                    }`}
                  >
                    {formData.isCustomBudget
                      ? '✓ Custom Budget Selected'
                      : '+ Enter Custom Budget'}
                  </button>

                  {formData.isCustomBudget && (
                    <div className="mt-3 animate-fadeIn">
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          $
                        </span>
                        <input
                          type="number"
                          placeholder="Enter target budget (USD)"
                          value={formData.customBudget}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              customBudget: e.target.value,
                            })
                          }
                          className="w-full pl-8 pr-4 py-3 rounded-xl bg-black/40 border border-[#00ff87]/50 focus:border-[#00ff87] outline-none text-white text-sm transition-all"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* STEP 3: Contact Info */}
            {step === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <span className="text-[#00ff87] text-xs font-mono tracking-widest uppercase">
                  Step 04 / 04
                </span>
                <h2 className="text-2xl font-bold">Your Contact Details</h2>
                <div className="space-y-3">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name / Studio"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full p-3.5 rounded-xl bg-black/40 border border-gray-800 focus:border-[#00ff87] outline-none text-white transition-all text-sm"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full p-3.5 rounded-xl bg-black/40 border border-gray-800 focus:border-[#00ff87] outline-none text-white transition-all text-sm"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      id="number"
                      name="phone"
                      placeholder="Phone Number"
                      required
                      value={formData.number}
                      onChange={(e) =>
                        setFormData({ ...formData, number: e.target.value })
                      }
                      className="w-full p-3.5 rounded-xl bg-black/40 border border-gray-800 focus:border-[#00ff87] outline-none text-white transition-all text-sm"
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>

                  <div>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Briefly describe your vision..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full p-3.5 rounded-xl bg-black/40 border border-gray-800 focus:border-[#00ff87] outline-none text-white transition-all text-sm resize-none"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-800/80">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={state.submitting}
                  className="px-5 py-2.5 rounded-lg border border-gray-700 hover:border-gray-500 text-sm transition-all disabled:opacity-50 cursor-pointer"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2.5 rounded-lg bg-[#00ff87] text-black font-semibold text-sm hover:bg-[#00e077] transition-all shadow-lg shadow-[#00ff87]/20 cursor-pointer"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="px-8 py-2.5 rounded-lg bg-[#00ff87] text-black font-semibold text-sm hover:bg-[#00e077] transition-all shadow-lg shadow-[#00ff87]/30 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                >
                  {state.submitting ? 'Transmitting...' : 'Submit Inquiry'}
                </button>
              )}
            </div>
          </form>
        ) : (
          /* STEP SUCCESS */
          <div className="text-center py-10 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 bg-[#00ff87]/20 text-[#00ff87] border border-[#00ff87] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h2 className="text-3xl font-bold">Inquiry Transmitted</h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Thank you,{' '}
              <span className="text-white font-medium">
                {formData.name || 'there'}
              </span>
              . Our studio has received your specification and will respond within
              24 hours.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};