import ArchitectureHero from '@/components/ArchitectureEngineering/ArchitectureHero'
import IntegratedArchitecturalExecution from '@/components/ArchitectureEngineering/IntegratedArchitecturalExecution'
import PhaseTechnicalMatrix from '@/components/ArchitectureEngineering/PhaseTechnical'
import FeaturedArchitectureCaseStudies from '@/components/ArchitectureEngineering/FeaturedArchitectureCaseStudies'
import React from 'react'
import PrecisionCommissionModels from '@/components/ArchitectureEngineering/PrecisionCommissionModels'
import TechnicalFAQ from '@/components/ArchitectureEngineering/TechnicalFAQ'
import ArchitectureFinalCTA from '@/components/ArchitectureEngineering/ArchitectureFinalCTA'

const page = () => {
  return (
    <>
    <ArchitectureHero/>
    <IntegratedArchitecturalExecution/>
    <PhaseTechnicalMatrix/>
    <FeaturedArchitectureCaseStudies/>
    {/* <PrecisionCommissionModels /> */}
    <TechnicalFAQ />
       <ArchitectureFinalCTA />
    </>
  )
}

export default page
