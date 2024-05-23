import React from 'react'
import FooterList from './FooterList'
import Container from '../Container'
import Link from 'next/link'
import { MdFacebook } from 'react-icons/md'
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-slate-700 text-slate-200 text-sm mt-5 rounded-md'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
          <FooterList>
            <h3 className='text-lg font-bold mb-2'>الاصناف</h3>
            <Link href={`#`}>الخدمات</Link>
            <Link href={`#`}>نصوص</Link>
            <Link href={`#`}>علاقات</Link>
            <Link href={`#`}>مشاهدات</Link>
            <Link href={`#`}>رياضيات</Link>
          </FooterList>
          <FooterList>
            <h3 className='text-lg font-bold mb-2'>خدمة العملاء</h3>
            <Link href={`#`}>تواصل معنا</Link>
            <Link href={`#`}>سياسات الشحن</Link>
            <Link href={`#`}>الاستعادة & الصيانة</Link>
            <Link href={`#`}>FAQs</Link>
          </FooterList>
          <FooterList>
            <h3 className='text-lg font-bold mb-2'>من نحن</h3>
            <p className='text-base mb-2'>
              يوجهك هذا الرابط إلى موقع خارجي قد تكون له سياسات مختلفة للمحتوى والخصوصية عن موقع هيئة تنظيم الاتصالات والحكومة الرقمية
            </p>
            <p className='text-base'>&copy; {new Date().getFullYear()} دائرة الاراضي والاملاك, جميع الحقوق محفوظة.</p>
          </FooterList>
          <FooterList>
            <h3 className='text-lg font-bold mb-2'>تابعنا</h3>
            <div className='flex gap-2'>
              <Link href={`#`}><MdFacebook size={24} /></Link>
              <Link href={`#`}><AiFillTwitterCircle size={24} /></Link>
              <Link href={`#`}><AiFillInstagram size={24} /></Link>
              <Link href={`#`}><AiFillYoutube size={24} /></Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </div>
  )
}

export default Footer
