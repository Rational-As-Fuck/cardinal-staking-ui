import { ReceiptType } from '@cardinal/staking/dist/cjs/programs/stakePool'
import { PublicKey } from '@solana/web3.js'
import type { CSSProperties } from 'react'

import type { AirdropMetadata } from '../common/Airdrop'

export enum TokenStandard {
  // Fungible, can have more than 1
  Fungible = 1,
  // Non fungible are all unique
  NonFungible = 2,
  // No receipt
  None = 3,
}

export type Analytic = {
  metadata?: {
    key: string
    type: 'staked'
    totals?: {
      key: string
      value: number
    }[]
  }
}

export type StakePoolMetadata = {
  // Name of this stake pool used as an id. Should be in lower-case kebab-case since it is used in the URL as /{name}
  // https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Why-you-should-make-kebab-case-a-URL-naming-convention-best-practice
  name: string
  // Display name to be displayed in the header. Often the same as name but with capital letters and spaces
  displayName: string
  // Whether or not to show name in header, defaults false
  nameInHeader?: boolean
  // Publickey for this stake pool
  stakePoolAddress: PublicKey
  // Description for this stake pool
  description?: string
  // Default receipt type. Setting this will remove the option for the user to choose which receipt type to use
  receiptType?: ReceiptType
  // Default empty. Setting this will tell the UI to only show tokens of that standard. Supports fungible or non-fungible
  tokenStandard?: TokenStandard
  // Optional config to hide this pool from the main page
  hidden?: boolean
  // Optional config to disable finding this pool
  notFound?: boolean
  // Optional hostname to remap
  hostname?: string
  // Optional hide footer
  hideFooter?: boolean
  // Optional config to link redirect to page when you click on this pool
  redirect?: string
  // Hide allowed tokens style
  hideAllowedTokens?: boolean
  // styles to apply to the whole stake pool
  styles?: CSSProperties
  // Contrast homepage background
  contrastHomepageBkg?: boolean
  // Colors object to style the stake page
  colors?: {
    primary: string
    secondary: string
    accent?: string
    fontColor?: string
    fontColorSecondary?: string
    backgroundSecondary?: string
    fontColorTertiary?: string
  }
  // Disallow regions based on IP address
  disallowRegions?: { code: string; subdivision?: string }[]
  // If the logo should be displayed with paddding
  logoPadding?: boolean
  // Optional social links
  socialLinks?: []
  // Image url to be used as the icon in the pool selector and the header
  imageUrl?: string
  // Secondary image url to be used next to the icon in the pool selector and the header
  secondaryImageUrl?: string
  // Background image for pool
  backgroundImage?: string
  // Website url if specified will be navigated to when the image in the header is clicked
  websiteUrl?: string
  // Max staked is used to compute percentage of total staked
  maxStaked?: number
  // Links to show at the top right of the page
  links?: { text: string; value: string }[]
  // On devnet when you click the airdrop button on this page it will clone NFTs with this metadata and airdrop to the user. These will not contain verified creators
  airdrops?: AirdropMetadata[]
  // Analytics to show at the top of stake pool. supports trait based analytics and overall tokens data
  analytics?: Analytic[]
}

export const defaultSecondaryColor = 'rgba(29, 78, 216, 255)'

export const stakePoolMetadatas: StakePoolMetadata[] = [
  // {
  //   name: 'cardinal',
  //   displayName: 'Cardinal',
  //   stakePoolAddress: new PublicKey(
  //     'AxHiaxZeoDsyjD8Eyj5tQtrajkxYk5xebEK1QNQ1LSE7'
  //   ),
  //   imageUrl: '/logo-colored.png',
  //   colors: {
  //     primary: 'rgb(54,21,38,0.9)',
  //     secondary: 'rgb(157,120,138, 0.6)',
  //   },
  // },
  {
    name: 'imsoevolved',
    displayName: 'IMSO Evolved Chimps',
    stakePoolAddress: new PublicKey(
      'HFj3pKHCfiE1KRacBz5YYatnrWDVqiZxnHrqhdR9VqUa'
    ),
    websiteUrl: 'https://linktr.ee/IMSOnft',
    imageUrl:
      'https://d1fdloi71mui9q.cloudfront.net/JXkGgPyVTxmYtFiLOEa1_Gib4XWn8Gfg1cUtQ',
    maxStaked: 3509,
    nameInHeader: true,
    description: 'Stake your IMSO Evolved Chimps for 2 $RAIN/day',
    receiptType: ReceiptType.Original,
    tokenStandard: TokenStandard.NonFungible,
    hideAllowedTokens: true,
    hideFooter: true,
    styles: {
      fontFamily: 'Industry',
      fontWeight: 500,
      backgroundSize: '100% auto',
    },
    links: [
      {
        text: 'Buy Now',
        value: 'https://hyperspace.xyz/collection/imso',
      },
    ],
    colors: {
      primary: '#000000',
      secondary: '#000000',
      accent: '#000000',
      fontColor: '#FFFFFF',
      fontColorSecondary: '#FFFFFF',
    },
    backgroundImage: '',
  },
  {
    name: 'meta-overlord-clones',
    displayName: 'Meta Overlord Clones',
    stakePoolAddress: new PublicKey(
      'Dc8snKqYYg2t4AFRY2CAsA5PqyTkHmihiFscU1DUKxcR'
    ),
    websiteUrl: 'https://linktr.ee/IMSOnft',
    imageUrl:
      'https://vjjrkbcq4d4cm4bsc6ddad7ly74u6czpprw435iga4o4b2q47tzq.arweave.net/qlMVBFDg-CZwMheGMA_rx_lPCy98bc31BgcdwOoc_PM?ext=jpg',
    maxStaked: 477,
    nameInHeader: true,
    description: 'Stake your clone for 6.5 $RAIN/day',
    receiptType: ReceiptType.Original,
    tokenStandard: TokenStandard.NonFungible,
    hideAllowedTokens: true,
    hideFooter: true,
    styles: {
      fontFamily: 'Industry',
      fontWeight: 500,
      backgroundSize: '100% auto',
    },
    links: [
      {
        text: 'Buy Now',
        value: 'https://magiceden.io/marketplace/intergalactic_monkey_space_odyssey',
      },
    ],
    colors: {
      primary: '#000000',
      secondary: '#000000',
      accent: '#000000',
      fontColor: '#FFFFFF',
      fontColorSecondary: '#FFFFFF',
    },
    backgroundImage: '',
  },
  {
    name: 'unique-overlord',
    displayName: 'Unique Meta Overlords',
    stakePoolAddress: new PublicKey(
      'DzKf8FmUqPmJfb62XaxWZ9F5uSUstCVrLgVSbVzbKR9X'
    ),
    websiteUrl: 'https://linktr.ee/IMSOnft',
    imageUrl:
      'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://dl.airtable.com/.attachments/fc1d1275f51b28f4a294c55e7101c280/414d4881/IMSOnft_MagicEden_500x500.jpg',
    maxStaked: 32,
    nameInHeader: true,
    description: 'Stake your unique overlord for 9 $RAIN/day',
    receiptType: ReceiptType.Original,
    tokenStandard: TokenStandard.NonFungible,
    hideAllowedTokens: true,
    hideFooter: true,
    styles: {
      fontFamily: 'Industry',
      fontWeight: 500,
      backgroundSize: '100% auto',
    },
    links: [
      {
        text: 'Buy Now',
        value: 'https://magiceden.io/marketplace/intergalactic_monkey_space_odyssey',
      },
    ],
    colors: {
      primary: '#000000',
      secondary: '#000000',
      accent: '#000000',
      fontColor: '#FFFFFF',
      fontColorSecondary: '#FFFFFF',
    },
    backgroundImage: '',
  },
  {
    name: 'meta-chimp-champions',
    displayName: 'Meta Chimp Champions',
    stakePoolAddress: new PublicKey(
      'AYCiw74j8yxsk3YpNSQqq8zHrje7AzeKG6teTL5hW4h8'
    ),
    websiteUrl: 'https://linktr.ee/IMSOnft',
    imageUrl:
      'https://shdw-drive.genesysgo.net/5QWV5pbHoJpy8mYUAKgrBNBE2mPXbqwy4CVhHRqq33Ns/OG2.jpg',
    maxStaked: 1160,
    nameInHeader: true,
    description: 'Stake your Meta Chimp Champion for 4.5 $RAIN/day',
    receiptType: ReceiptType.Original,
    tokenStandard: TokenStandard.NonFungible,
    hideAllowedTokens: true,
    hideFooter: true,
    styles: {
      fontFamily: 'Industry',
      fontWeight: 500,
      backgroundSize: '100% auto',
    },
    links: [
      {
        text: 'Buy Now',
        value: 'https://magiceden.io/marketplace/imsonft',
      },
    ],
    colors: {
      primary: '#000000',
      secondary: '#000000',
      accent: '#000000',
      fontColor: '#FFFFFF',
      fontColorSecondary: '#FFFFFF',
    },
    backgroundImage: '',
  },
]
