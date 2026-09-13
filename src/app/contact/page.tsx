import { Metadata } from 'next';
import { MultiStepForm } from '@/components/quote/MultiStepForm';

export const metadata: Metadata = {
  title: 'Project Inquiry | Architectural & Web Systems Studio',
  description: 'Interactive 3D project specification and quote generator.',
};

export default function QuotePage() {
  return (
    <main className="w-full min-h-screen bg-black">
      <MultiStepForm />
    </main>
  );
}