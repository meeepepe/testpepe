
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function FoodRandomizer() {
  const [food, setFood] = useState('');
  const [dessert, setDessert] = useState('');
  const [mode, setMode] = useState('street');

  // เมนูอาหาร Street Food
  const streetFoods = [
    'ส้มตำ', 'ข้าวเหนียวหมูปิ้ง', 'ก๋วยเตี๋ยวเรือ', 'หมูสะเต๊ะ', 'หอยทอด',
    'ผัดไทย', 'ลูกชิ้นปิ้ง', 'ไก่ทอดหาดใหญ่', 'ข้าวต้มกุ้ง', 'โรตีกรอบ'
  ];

  // เมนูอาหารตามร้านและห้าง
  const mallFoods = [
    'สเต็กหมูพริกไทยดำ', 'สปาเก็ตตี้คาโบนาร่า', 'แซลมอนซอสเทอริยากิ',
    'ข้าวหน้าไก่เทอริยากิ', 'พิซซ่าหน้าแฮมชีส', 'ลาซานญ่าเนื้อ', 'พอร์คชอปซอสเห็ด'
  ];

  // เมนูของหวาน
  const desserts = [
    'ไอศกรีมกะทิ', 'บัวลอยไข่หวาน', 'ข้าวเหนียวมะม่วง', 'ลอดช่องไทย',
    'โรตีใส่ไข่', 'แพนเค้ก', 'เค้กช็อกโกแลต', 'ชานมไข่มุก'
  ];

  const handleRandomFood = () => {
    const menu = mode === 'street' ? streetFoods : mallFoods;
    setFood(menu[Math.floor(Math.random() * menu.length)]);
  };

  const handleRandomDessert = () => {
    setDessert(desserts[Math.floor(Math.random() * desserts.length)]);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <h1 className="text-2xl font-bold">สุ่มเมนูอาหารและของหวาน</h1>

      <Select value={mode} onValueChange={setMode}>
        <SelectTrigger className="w-72">
          <SelectValue placeholder="เลือกโหมด" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="street">🌮 Street Food</SelectItem>
          <SelectItem value="mall">🍽️ อาหารตามห้าง</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex space-x-4">
        <Button onClick={handleRandomFood} className="bg-blue-500 text-white">🍛 สุ่มอาหาร</Button>
        <Button onClick={handleRandomDessert} className="bg-pink-500 text-white">🍰 สุ่มของหวาน</Button>
      </div>

      {food && <p className="text-lg font-semibold">เมนูวันนี้: {food}</p>}
      {dessert && <p className="text-lg font-semibold">ของหวานวันนี้: {dessert}</p>}
    </div>
  );
}
