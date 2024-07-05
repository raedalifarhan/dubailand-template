import React from 'react';
import MeetingRoomForm from '../MeetingRoomForm/page';
import PermanentParkingRequestForm from '../PermanentParkingRequestForm/page';


const RequestsPage = () => {
    return (
        <div className="space-y-12">
            <h1 className="text-2xl font-bold text-gray-800">طلبات الشؤون الإدارية</h1>
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">حجز غرفة الاجتماعات</h2>
                <MeetingRoomForm />
            </div>
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">طلب حجز موقف دائم</h2>
                <PermanentParkingRequestForm />
            </div>
        </div>
    );
}

export default RequestsPage;
