'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { HeartHandshake, ShieldCheck, Banknote, ArrowRight, CheckCircle, Loader2, Check } from 'lucide-react';
import Link from 'next/link';
import donationHeroImage from '@/public/images/donation-2.jpg';

interface DonationFormState {
  donationAmount: number | null;
  donationType: 'one-time' | 'monthly';
  paymentMethod: 'card' | 'bank' | 'mobile';
  designatedCause: 'general' | 'kiosk' | 'training' | 'research' | 'emergency';
  donorName: string;
  donorEmail: string;
  donorCountry: string;
  isAnonymous: boolean;
}

interface DonationFormProps {
  heroImage?: string;
}

export default function DonateForm({ 
  heroImage: heroImageProp 
}: DonationFormProps) {
  const [formState, setFormState] = useState<DonationFormState>({
    donationAmount: 50,
    donationType: 'one-time',
    paymentMethod: 'card',
    designatedCause: 'general',
    donorName: '',
    donorEmail: '',
    donorCountry: '',
    isAnonymous: false,
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [donationComplete, setDonationComplete] = useState(false);

  const presetAmounts = [20, 50, 100, 250, 500, 1000];

  const handleAmountChange = (amount: number) => {
    setFormState({ ...formState, donationAmount: amount });
  };

  const handleCustomAmount = (value: string) => {
    const amount = value ? parseInt(value) : null;
    setFormState({ ...formState, donationAmount: amount });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formState.donationAmount || formState.donationAmount <= 0) {
      setError('Please select or enter a valid donation amount');
      return;
    }

    if (!formState.isAnonymous && (!formState.donorName || !formState.donorEmail)) {
      setError('Please fill in your name and email');
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setDonationComplete(true);
    }, 2000);
  };

  if (donationComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Support!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Your donation will help us improve healthcare for communities across Kenya. 
            A receipt has been sent to your email.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg text-left mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Donation Summary</h3>
            <p className="text-gray-600">Amount: ${formState.donationAmount}</p>
            <p className="text-gray-600">Frequency: {formState.donationType === 'one-time' ? 'One-time' : 'Monthly'}</p>
          </div>
          <button
            onClick={() => {
              setDonationComplete(false);
              setFormState({
                donationAmount: 50,
                donationType: 'one-time',
                paymentMethod: 'card',
                designatedCause: 'general',
                donorName: '',
                donorEmail: '',
                donorCountry: '',
                isAnonymous: false,
              });
            }}
            className="w-full bg-ubuntu-blue hover:bg-ubuntu-blue/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Make Another Donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-auto lg:h-[440px]">
        <div className="flex flex-col lg:flex-row w-full h-full">
          {/* Left: Blue background with content */}
          <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center bg-gradient-to-r from-ubuntu-blue to-ubuntu-blue px-4 sm:px-6 lg:px-12 py-12 min-h-[300px] lg:min-h-full">
            <div className="w-20 h-20 bg-ubuntu-orange/20 rounded-full flex items-center justify-center mb-6 mx-auto lg:mx-0">
              <HeartHandshake className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center lg:text-left">
              Support Healthcare in Rural Kenya
            </h1>
            <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
              Your donation helps build Ubuntu Afya kiosks, train community health workers, and provide essential healthcare services to underserved communities.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative w-full lg:w-1/2 h-[300px] lg:h-full">
            <img
              src={donationHeroImage.src}
              alt="Donation Hero"
              className="absolute inset-0 w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Donation Type */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">I want to give:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        setFormState({ ...formState, donationType: 'one-time' })
                      }
                      className={`py-3 px-6 rounded-lg border font-medium transition-colors ${
                        formState.donationType === 'one-time'
                          ? 'border-ubuntu-orange bg-ubuntu-orange/10 text-ubuntu-orange'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormState({ ...formState, donationType: 'monthly' })
                      }
                      className={`py-3 px-6 rounded-lg border font-medium transition-colors ${
                        formState.donationType === 'monthly'
                          ? 'border-ubuntu-orange bg-ubuntu-orange/10 text-ubuntu-orange'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Select amount (USD)</h3>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountChange(amount)}
                        className={`py-4 px-6 rounded-lg border font-medium transition-colors ${
                          formState.donationAmount === amount
                            ? 'border-ubuntu-orange bg-ubuntu-orange/10 text-ubuntu-orange'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                      Or enter a custom amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        id="customAmount"
                        type="number"
                        placeholder="0.00"
                        value={formState.donationAmount === null ? '' : formState.donationAmount}
                        onChange={(e) => handleCustomAmount(e.target.value)}
                        className="w-full pl-8 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange/50"
                        min="1"
                        step="1"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Payment method</h3>
                  <div className="space-y-4">
                    {[
                      { value: 'card', label: 'Credit/Debit Card', desc: 'Visa, Mastercard, Amex' },
                      { value: 'bank', label: 'Bank Transfer', desc: 'Direct bank transfer' },
                      { value: 'mobile', label: 'Mobile Money', desc: 'M-Pesa, Airtel Money' },
                    ].map((method) => (
                      <button
                        key={method.value}
                        type="button"
                        onClick={() =>
                          setFormState({
                            ...formState,
                            paymentMethod: method.value as 'card' | 'bank' | 'mobile',
                          })
                        }
                        className={`w-full py-4 px-6 rounded-lg border flex items-center transition-colors ${
                          formState.paymentMethod === method.value
                            ? 'border-ubuntu-orange bg-ubuntu-orange/10'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                            formState.paymentMethod === method.value
                              ? 'border-ubuntu-orange bg-ubuntu-orange'
                              : 'border-gray-300'
                          }`}
                        >
                          {formState.paymentMethod === method.value && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-gray-900">{method.label}</p>
                          <p className="text-sm text-gray-500">{method.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Designated Cause */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Where would you like your donation to go?
                  </h3>
                  <select
                    value={formState.designatedCause}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        designatedCause: e.target.value as typeof formState.designatedCause,
                      })
                    }
                    className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange/50"
                  >
                    <option value="general">General Fund - Where it's needed most</option>
                    <option value="kiosk">Ubuntu Afya Kiosk Expansion</option>
                    <option value="training">Community Health Worker Training</option>
                    <option value="research">Health Research Programs</option>
                    <option value="emergency">Emergency Response</option>
                  </select>
                </div>

                {/* Donor Information */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Your information</h3>
                    <label className="flex items-center text-sm text-gray-600">
                      <input
                        type="checkbox"
                        checked={formState.isAnonymous}
                        onChange={(e) =>
                          setFormState({ ...formState, isAnonymous: e.target.checked })
                        }
                        className="mr-2 rounded"
                      />
                      Make this donation anonymous
                    </label>
                  </div>

                  {!formState.isAnonymous && (
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formState.donorName}
                          onChange={(e) =>
                            setFormState({ ...formState, donorName: e.target.value })
                          }
                          className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange/50"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formState.donorEmail}
                          onChange={(e) =>
                            setFormState({ ...formState, donorEmail: e.target.value })
                          }
                          className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange/50"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                          Country
                        </label>
                        <select
                          id="country"
                          value={formState.donorCountry}
                          onChange={(e) =>
                            setFormState({ ...formState, donorCountry: e.target.value })
                          }
                          className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ubuntu-orange/50"
                        >
                          <option value="">Select country</option>
                          <option value="US">United States</option>
                          <option value="KE">Kenya</option>
                          <option value="NG">Nigeria</option>
                          <option value="ZA">South Africa</option>
                          <option value="GH">Ghana</option>
                          <option value="EG">Egypt</option>
                          <option value="TZ">Tanzania</option>
                          <option value="UG">Uganda</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!formState.donationAmount || isProcessing}
                  className="w-full bg-ubuntu-orange hover:bg-ubuntu-orange/90 disabled:bg-gray-400 text-white font-medium py-5 px-6 rounded-lg flex items-center justify-center transition-colors text-lg"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Donate ${formState.donationAmount || ''}
                      <ArrowRight className="w-5 h-5 ml-3" />
                    </>
                  )}
                </button>

                {/* Security Assurance */}
                <div className="flex items-center text-sm text-gray-500">
                  <ShieldCheck className="w-5 h-5 mr-3 text-gray-400" />
                  Secure payment processing powered by Stripe
                </div>
              </form>
            </div>
          </div>

          {/* Impact Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Impact</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Banknote className="w-6 h-6 text-ubuntu-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg mb-1">$50</h3>
                    <p className="text-gray-600 text-sm">Provides healthcare services for 5 families</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Banknote className="w-6 h-6 text-ubuntu-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg mb-1">$100</h3>
                    <p className="text-gray-600 text-sm">Supports one month of training for a health worker</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Banknote className="w-6 h-6 text-ubuntu-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg mb-1">$250</h3>
                    <p className="text-gray-600 text-sm">Funds essential medicines for a Ubuntu Afya kiosk</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ubuntu-orange/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Banknote className="w-6 h-6 text-ubuntu-orange" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg mb-1">$500+</h3>
                    <p className="text-gray-600 text-sm">Helps establish new kiosks in underserved areas</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200 mb-8">
                <h3 className="font-medium text-gray-900 text-lg mb-4">Why donate to Ubuntu Afya?</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-ubuntu-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span>90% of donations go directly to programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-ubuntu-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span>Transparent financial reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-ubuntu-orange mr-2 mt-0.5 flex-shrink-0" />
                    <span>Community-owned healthcare model</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-medium text-gray-900 text-lg mb-4">Where Your Money Goes</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Every donation to Ubuntu Afya supports our mission across Kenya, from building kiosks to training health workers and providing essential medicines.
                </p>
                <Link
                  href="/impact"
                  className="text-ubuntu-orange font-medium text-sm hover:text-ubuntu-orange/90 inline-flex items-center gap-1"
                >
                  View Impact Report
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}