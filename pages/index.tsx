import { Seo } from '@/components/Seo'
import { Shared } from '@/shared'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Seo title='Welcome To Lux Grande' />
      <Shared heroSection={<HeroSection />}>
        <BriefAbout />
        <Services />
        <OurTeam />
        <CTA />
        <FAQs />
      </Shared>
    </>
  )
}


const HeroSection = () => {
  return (
    <div className="relative py-24 sm:py-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" text-center">
          <h1
            style={{ fontFamily: 'Playfair Display' }}

            className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Welcome To Lux Grande
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            At Lux Grande Beauty Lounge, we believe in providing the highest quality service in an intimate environment that respects your time and your needs. You deserve nothing less than excellence when it comes to your appearance, and we are here to make sure that happens!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-gold-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              Book An Appointment
            </a>
            <a href="#" className="text-base font-semibold leading-7 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className='grid grid-cols-2 rounded-md'>
          <div
            className="mt-16 relative  bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
          >
            <Image
              src='/images/flyer-1.jpg'
              alt="Picture of the author"
              placeholder='blur'
              height={620}
              width={620}
              blurDataURL='/images/flyer-1.jpg'
            />
          </div>
          <div
            className="mt-16 relative h rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24"
          >
            <Image
              src='/images/flyer-2.jpg'
              alt="Picture of the author"
              placeholder='blur'
              height={620}
              width={620}
              blurDataURL='/images/flyer-2.jpg'
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ee0717bf-3e43-49df-b1bd-de36422ed3d3)"
            fillOpacity=".2"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ee0717bf-3e43-49df-b1bd-de36422ed3d3"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { BriefAbout } from '@/components/home/brief-about'
import { CTA } from '@/components/home/cta'
import { LogoCloud } from '@/components/home/logo-cloud'
import { OurTeam } from '@/components/home/our-team'
import { Services } from '@/components/home/services'
import { FAQs } from '@/components/home/faq'

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
]
