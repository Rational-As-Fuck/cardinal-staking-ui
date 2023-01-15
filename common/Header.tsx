import { AccountConnect } from '@cardinal/namespaces-components'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { GlyphWallet } from 'assets/GlyphWallet'
import { useStakePoolId } from 'hooks/useStakePoolId'
import { useStakePoolMetadata } from 'hooks/useStakePoolMetadata'
import { useEnvironmentCtx } from 'providers/EnvironmentProvider'

import { Airdrop } from './Airdrop'
import { ButtonSmall } from './ButtonSmall'
import { contrastColorMode } from './utils'
import { asWallet } from './Wallets'

export const Header = () => {
  const { environment, secondaryConnection } = useEnvironmentCtx()
  const wallet = useWallet()
  const walletModal = useWalletModal()
  const stakePoolId = useStakePoolId()
  const { data: stakePoolMetadata } = useStakePoolMetadata()

  return (
    <div>
      <div
        className={`mb-5 flex flex-wrap justify-center gap-6 px-10 pt-5 text-white md:justify-between`}
        style={{ color: stakePoolMetadata?.colors?.fontColor }}
      >
        <div className="flex items-center gap-3">
          <a
            target="_blank"
            href={
              stakePoolMetadata?.websiteUrl ||
              `/${
                environment.label !== 'mainnet-beta'
                  ? `?cluster=${environment.label}`
                  : ''
              }`
            }
            className="flex cursor-pointer text-xl font-semibold"
            rel="noreferrer"
          >
            {stakePoolMetadata?.secondaryImageUrl && (
              <div className="ml-2 flex flex-row">
                <img
                  className="flex h-[35px] flex-col"
                  src={stakePoolMetadata?.secondaryImageUrl}
                  alt={stakePoolMetadata?.secondaryImageUrl}
                />
                {stakePoolMetadata.nameInHeader && (
                  <span
                    className="ml-5 mt-1 flex flex-col"
                    style={{ color: stakePoolMetadata?.colors?.fontColor }}
                  >
                    {stakePoolMetadata?.displayName}
                  </span>
                )}
              </div>
            )}
          </a>
          {environment.label !== 'mainnet-beta' && (
            <div className="cursor-pointer rounded-md bg-[#9945ff] p-1 text-[10px] italic text-white">
              {environment.label}
            </div>
          )}
          {environment.label !== 'mainnet-beta' ? (
            <div className="mt-0.5">
              <Airdrop />
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="relative my-auto flex flex-wrap items-center justify-center gap-y-6 align-middle">
          <div className="mr-10 flex flex-wrap items-center justify-center gap-8 border-2 p-5 rounded-xl">
            {stakePoolId &&
              stakePoolMetadata &&
              stakePoolMetadata.links?.map((link) => (
                <a
                  key={link.value}
                  href={link.value}
                  className="cursor-pointer transition-all hover:opacity-80"
                >
                  <p style={{ color: stakePoolMetadata?.colors?.fontColor }}>
                    {link.text}
                  </p>
                </a>
              ))}
              <a className="cursor-pointer transition-all hover:opacity-80" href="https://imsonft.io/">
                <img
                  className="h-4 lg:h-6"
                  alt="IMSO logo"
                  src="/logos/imso_website_header_logo.png" />
            </a>
            <a className="cursor-pointer transition-all hover:opacity-80" href="https://discord.gg/4gRMm6mgHZ">
                <img
                  className="h-4 lg:h-6"
                  alt="Discord logo"
                  src="/logos/discord.svg" />
            </a>
            <a className="cursor-pointer transition-all hover:opacity-80" href="https://twitter.com/IMSO_Game">
                <img
                  className="h-4 lg:h-6"
                  alt="Twitter logo"
                  src="/logos/twitter.svg" />
            </a>
            <a className="cursor-pointer transition-all hover:opacity-80"
                href="https://magiceden.io/marketplace/intergalactic_monkey_space_odyssey">
                <img
                  className="h-4 lg:h-6"
                  alt="Magic Edenlogo"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABUCAYAAABQrd98AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzk1OTFEMDM3ODlBMTFFQzg3NTg4QTA1RjFBODNFOEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzk1OTFEMDQ3ODlBMTFFQzg3NTg4QTA1RjFBODNFOEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOTU5MUQwMTc4OUExMUVDODc1ODhBMDVGMUE4M0U4RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOTU5MUQwMjc4OUExMUVDODc1ODhBMDVGMUE4M0U4RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PixkhI0AAAiASURBVHja7F1pbFVFGJ1XoICsBtzABSIEFJE/IETRGA0FI1WQGlGgJUhAMZK4UYkLSF0QJBZNgYgosilCASGKS8CFGlxQWVxipIoQoYAoIFpk6fMc7jzzaN/t2+7Mm3vfnOQ4BMvc+WZOZ/++CQkXhMPhdkiGgwPA7mBb+b/2gVvBdeCSUCi0UwQYqIdGSPLBQWBPsD3YMoCmHgLZll+CK8F30LY1iVRQK7AUPBaOjxPgPLBtQMUyBPwlnJ34HsyLV0E9wMoUMt8PXh0goTQAZ4UtiKlgKFYldQcPpJHxv+BNARHMPKuT0zAjUjchWUEck78FL0izro+DBRj7VvtYLKORzBUWtTEY7boqIpg5SMZ6lDFFMwyZL/OhWC6Vk74zrD7qYBfYKYRKuhB/2A428jBzzq4LIZrFPhJLEymWy6w2XDEih//xWCwE812ARhjmo8ootWKJiwI2bH9FmftGNChjgYdDcpDRi0PS7/hDG4Uf4fBUhOFpkaFi6YDkG7C11UNivUAbDd9YiIa520CxNETyuhVLco2pC7MMFE0J2MfKIGFUcUgKa/7oOAxPsw3oXfoheU/IvSiLhFCeCcFkXDQw+WzhHKCeYzWQFIoyJRhiAkQzPQNiYY/yLphn2z8p7AY75mSwANPQeA9n4LsPWbGkhAfxC34skz1MBBNRkKmaehdOcDeADW37J4WX0Ean9qlMEIwW0fCeD5LNYAfb/smJRc45T+peVteHZ9CgkxR/Y64VS3JLaOFsuI6NiEUY1jVPhmiaonCez2uQ7xgkt1oNxMXfYAW4HFyEtjha+wdMGZKi8ayXooF53ZBsApv4oMEo7A8y9O2/wD9Q9/XqwcTJXzE17IVo2GMhWeoTsRAnYfcOkwuYY2i5il3vkiYHXlno5qMhYTZs7mtyAU0ckqIxR87Qky4jzOKc5U0fziN4e6A3bP7ZCkaTaGBSR+FcWWjl08nnj2Af2HzQDknJ4y7hnHSHEhQLbw8u8bFYiC5gOWzJtYJRL5onRTCuLFwHllnBpCea+XQyq6d34RnRBIVl4O1B3ul5Q5PNo2FTsVGt4EOnqsWxRIO/Oxfcq/jbj8lv5YLrNNlbA95iJ73pgXOUwsiWNUxgT8krC/0UfnM9mBf1TV7r3Ah21WBvNXgNvr3JDkmp4Q7heCREepoJisWyVzjOef+fqcgVzI1yGawa3IBcI33IbA+TBsqFE3bkBaFu17pG9izrXIb0q2QZGmuwl+7MfVGWQ1Yw5uIJNNDkOPNA9ni6vDwpzgEo0wk7JJkHzltK4v7WhUKcUz2uqUzXgzNtD2MeGGmrB8RQleBqk3tECznX0VS+YpRtWpAEs004oc78iLDs9t9PcosiVw4ZOg4QOQG/EmX8IghD0lsw5HKkE30qmKeTFYscmo4JJxbedg1l5AqxzIMTfSMEc1BWIO/pjvOZWD4BU74uCpsPIBkI/qmhrAzSOCBQk17psOYX0ewHb4/eb0nRZp42DxZOcCXVGBW4VZJPRMN5y3CUdbdHNn8snCuXqtFfBhUI1rLaB6JJad4Sx+b5zFdxuVuAlwROMIaLJq15Sxw8Cq5VXP6LAimYKNGMFM6We2DmLfXYy6FO9a5s88AKRlbia0gKDRCNp/OWmB8Ih+limq/YjqpAC0aKZrEBovF83lJLLNy4LFVsA+tvW+AFY4Bo1iuct1AszZAwVrFqn6gNcu8n+ILJoGjq3G9RAN7H7aLBFq33fo04rZai4RUBHRtdNVIsysZ99C5FSIo02MJA1MuzTjBSNHRpLdAgmhK3y1AeiaWrpt96nluNScXJLxCCkaJZrVg0dHSfolAsTeW8pZmG6mLIt82628i4C1QKRbNHLqFVzpV0hZ/nS3gZuURl5I07BaKhSLg5t09h7zJU6Dk7+hy8M1NtY+wVzSjRHPUgu0nyMFCVWDoLPW8s8U3GQbEC/WS9YKJEQ1eO6jSyob/SUwrF0kTOW1RvzzPgT77K1Z3vBSNFww02Xkg6nMI/rwRHKF5JPAf20LAVcBvs2Jrp9vCF14AUTW85fieKz8Br8W+VOZrJZ3Pu0VAF42HHWiMaQ5E/8HxFZeWl9XyQXoDVMb57EqwAC+tz2veoLB3Bgxp8q2ea9MvrqwDHcmhZIxy3UcaB6QSeJZw3GnnivAM/c1jDL5muGDRvg/dbwXgjHi65f5DUDR3P5mwBhyo+7wrmHMYkaIhBQ+yRK6IjptlvBZOcWPhczgKh9o2lf7gqhFh2mVgHVjBJTLiRvCrUvrFUI4ehr02tByuYxMGQaTco/gb9pdeYXAn2GZjEehdehJqh4VM7ZWSrTOBIIiFErGASW0LzCeWmGj63NIOmMpYeJ9sfgSvAVbFO9u2QFB+M+9IzC+ykFtoLJ1wJI3t9BwENsoJJrnfhXsvELDWfNwdXog7KonfNrWDcxdJYLqEbZHlV0FP1lUhYESsYd4wHO9tqOAV6ddxrBePeuzTP4qHIDSWolzZWMLExEjzTVsNpaAkOt4Jx74It6iJPlWCO+7VG0O2eh6SX1UZMdFYa486n6GR14YpcVYLZ5uNKaWF14YpDFIyK2Cif+rhSqqwuXFFJwXzlcaYbQ6FQpY8rhQ9AVFttxMSHFMwKjzOd6ecakcGZy602Yi5kllEwfI5uj0eZVgh/Pv1bG9OFOTH4TMEcOtHlSLdLL26m87b+KN3hJxT1MlulaCwc8A1tRgN1jgZQQexlXkwjQ475NyOfnwJUSY8Ix5Uk20FHwIF13Hekk9jzKTha8ZZYIDe6ZJ08AB4JZye2gBfHq6Qh4K8JZHYULJUHdYEGd3/BKeD2LBHKb+B9sR5aD7lUEH+QfsN8YIGXiNrJ4YtvDXJ8Z0SEl1XGWzFYPOcjuUI4Vx94jNA6IKadkHMV7qFVuDnQ/SfAANVwPjCmvGDtAAAAAElFTkSuQmCC"/>
            </a>
          </div>
          {wallet.connected && wallet.publicKey ? (
            <AccountConnect
              dark={
                stakePoolMetadata?.colors?.backgroundSecondary
                  ? contrastColorMode(stakePoolMetadata?.colors?.primary)[1]
                  : true
              }
              connection={secondaryConnection}
              environment={environment.label}
              handleDisconnect={() => wallet.disconnect()}
              wallet={asWallet(wallet)}
            />
          ) : (
            <ButtonSmall
              className="text-xs"
              onClick={() => walletModal.setVisible(true)}
            >
              <>
                <GlyphWallet />
                <div className="text-white">Connect wallet</div>
              </>
            </ButtonSmall>
          )}
        </div>
      </div>
    </div>
  )
}
