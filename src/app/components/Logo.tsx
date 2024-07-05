import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <div className="flex justify-between flex-wrap ">
            <Link href={'/'}>
                <Image src="/images/logo-land_department.svg" width={200} height={50} alt="dubai gov" />
            </Link>
            <Link href={'https://www.digitaldubai.ae'} target="_blank" rel="noreferrer">
                <Image src="/images/logo-GovDubaiLogoNew.png" width={200} height={50} alt="internal portal" />
            </Link>
        </div>
    )
}

export default Logo;
