import Link from 'next/link';

const AllFormsPage = () => {
  return (
    <div>
      <h1>جميع النماذج</h1>
      <ul>
        <li>
          <Link href="/VehicleMaintenanceRequestForm">نموذج طلب صيانة المركبات</Link>
        </li>
        <li>
          <Link href="/VisitorParkingRequestForm">نموذج طلب مواقف الزوار</Link>
        </li>
        <li>
          <Link href="/MeetingRoomForm">نموذج حجز غرفة اجتماعات</Link>
        </li>
        <li>
          <Link href="/PermanentParkingRequestForm">نموذج حجز موقف دائم</Link>
        </li>
        <li>
          <Link href="/TemporaryParkingRequestForm">نموذج حجز موقف مؤقت</Link>
        </li>
        <li>
          <Link href="/GeneralParkingCardRequestForm">نموذج طلب بطاقة موقف عام</Link>
        </li>
        <li>
          <Link href="/RTAParkingCardRequestForm">نموذج طلب بطاقات موقف عام RTA</Link>
        </li>
        <li>
          <Link href="/VisitorParkingRequestForm">نموذج حجز مواقف الزوار</Link>
        </li>
        <li>
          <Link href="/VehicleRequestForm">نموذج طلب مركبة</Link>
        </li>
        <li>
          <Link href="/VehicleMaintenanceRequestForm">نموذج طلب صيانة مركبة</Link>
        </li>
      </ul>
    </div>
  );
};

export default AllFormsPage;
