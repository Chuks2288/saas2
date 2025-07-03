import { auth } from '@/lib/auth'
import { noSessionRedirect } from '@/lib/session'
import { HomeView } from '@/modules/home/ui/views/home-view'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const Page = async () => {
  const session = await noSessionRedirect();

  return <HomeView />
}

export default Page