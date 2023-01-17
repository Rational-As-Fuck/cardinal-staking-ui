import { PlusIcon } from '@heroicons/react/24/solid'
import { HeaderSlim } from 'common/HeaderSlim'
import { withCluster } from 'common/utils'
import { statsNameMapping, useGlobalStats } from 'hooks/useGlobalStats'
import { useRouter } from 'next/router'
import { useEnvironmentCtx } from 'providers/EnvironmentProvider'

import { ButtonPrimary } from '@/components/UI/buttons/ButtonPrimary'
import { BodyCopy } from '@/components/UI/typography/BodyCopy'
import { HeadingPrimary } from '@/components/UI/typography/HeadingPrimary'

export const MainHero = () => {
  const { environment } = useEnvironmentCtx()
  const stats = useGlobalStats()
  const router = useRouter()
  return (
    <div className="relative z-0 text-sm">
      <div className="blur-4xl absolute left-8 top-52 -z-10 h-[120px] w-[400px] -rotate-[60deg] bg-glow blur-[100px]" />
      <div className="blur-4xl absolute -right-20 top-72 -z-10 h-[100px] w-[550px] -rotate-[60deg] bg-glow blur-[120px]" />
      <HeaderSlim />
      <div className="flex flex-wrap justify-between gap-10 px-8 py-24 md:px-16">
        <div className="flex flex-col gap-2">
          <HeadingPrimary className="mb-2">IMSO Stake Hub</HeadingPrimary>
          <div className="text-lg text-medium-3">
            Lock your NFTs or tokens to earn rewards from various reward
            mechanisms including
            <br />
            tokens, merchandise, redeemable rewards, referral tokens and more.
          </div>
        </div>
      </div>
    </div>
  )
}
