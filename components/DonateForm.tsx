'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, CreditCard, Smartphone } from 'lucide-react';

interface DonationAmount {
  amount: number;
  label: string;
  popular?: boolean;
}

const donationAmounts: DonationAmount[] = [
  { amount: 25, label: '$25' },
  { amount: 50, label: '$50' },
  { amount: 100, label: '$100', popular: true },
  { amount: 250, label: '$250' },
  { amount: 500, label: '$500' },
];

export default function DonateForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Integrate with payment processor (Stripe, PayPal, etc.)
    // TODO: Add environment variables for API keys
    // NEXT_PUBLIC_STRIPE_KEY=your_stripe_key_here
    // MOBILE_MONEY_API_KEY=your_mobile_money_key_here
    
    const finalAmount = selectedAmount || parseFloat(customAmount);
    
    if (!finalAmount || finalAmount <= 0) {
      alert('Please select or enter a valid donation amount');
      return;
    }

    if (!donorInfo.name || !donorInfo.email) {
      alert('Please fill in your name and email');
      return;
    }

    // Mock payment processing
    console.log('Processing donation:', {
      amount: finalAmount,
      isRecurring,
      donor: donorInfo,
    });

    // Show success message
    alert(`Thank you for your donation of $${finalAmount}! You will receive a confirmation email shortly.`);
    
    // Reset form
    setSelectedAmount(null);
    setCustomAmount('');
    setIsRecurring(false);
    setDonorInfo({ name: '', email: '', phone: '' });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-ubuntu-orange/10 text-ubuntu-orange">
              <Heart className="h-8 w-8" />
            </div>
          </div>
          <CardTitle className="text-2xl text-ubuntu-blue">Support Ubuntu Afya</CardTitle>
          <CardDescription className="text-lg">
            Your donation helps us provide healthcare to underserved communities across Kenya
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Donation Amount */}
            <div>
              <Label className="text-lg font-semibold">Select Donation Amount</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                {donationAmounts.map((option) => (
                  <Button
                    key={option.amount}
                    type="button"
                    variant={selectedAmount === option.amount ? "default" : "outline"}
                    className={`relative ${
                      selectedAmount === option.amount 
                        ? 'bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white' 
                        : 'border-ubuntu-blue text-ubuntu-blue hover:bg-ubuntu-blue hover:text-white'
                    } ${option.popular ? 'ring-2 ring-ubuntu-orange' : ''}`}
                    onClick={() => handleAmountSelect(option.amount)}
                  >
                    {option.label}
                    {option.popular && (
                      <span className="absolute -top-2 -right-2 bg-ubuntu-orange text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </Button>
                ))}
              </div>
              
              {/* Custom Amount */}
              <div className="mt-4">
                <Label htmlFor="customAmount">Or enter a custom amount</Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    id="customAmount"
                    type="number"
                    placeholder="0.00"
                    value={customAmount}
                    onChange={(e) => handleCustomAmountChange(e.target.value)}
                    className="pl-8"
                    min="1"
                    step="0.01"
                  />
                </div>
              </div>
            </div>

            {/* Recurring Donation */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="recurring"
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}
                className="rounded border-gray-300 text-ubuntu-orange focus:ring-ubuntu-orange"
              />
              <Label htmlFor="recurring" className="text-sm">
                Make this a monthly recurring donation
              </Label>
            </div>

            {/* Donor Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Your Information</h3>
              
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  value={donorInfo.name}
                  onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={donorInfo.email}
                  onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={donorInfo.phone}
                  onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <CreditCard className="h-6 w-6 text-ubuntu-blue mr-3" />
                  <div>
                    <p className="font-medium">Credit/Debit Card</p>
                    <p className="text-sm text-gray-500">Visa, Mastercard, American Express</p>
                  </div>
                </div>
                <div className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <Smartphone className="h-6 w-6 text-ubuntu-blue mr-3" />
                  <div>
                    <p className="font-medium">Mobile Money</p>
                    <p className="text-sm text-gray-500">M-Pesa, Airtel Money</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-ubuntu-orange hover:bg-ubuntu-orange/90 text-white font-semibold py-3 text-lg"
            >
              Donate Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
