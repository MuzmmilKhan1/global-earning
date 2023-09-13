import About from '@/components/About/About'
import Contact from '@/components/Contact/Contact'
import Founders from '@/components/Founders/Founders'
import Banner from '@/components/Home/Banner'
import Plan from '@/components/Plans/Plan'
import Rule from '@/components/Rules/Rule'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner id="home"></Banner>
      <About id="about"></About>
      <Plan id="plan"></Plan>
      <Rule id="rule"></Rule>
      <Founders id="founder"></Founders>
      <Contact id="contact"></Contact>
    </main>
    </>
  )
}
