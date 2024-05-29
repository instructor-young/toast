import React, { useState } from "react";
import { useToast } from "../contexts/toast.context";
import Input from "./Input";

function Controller() {
  const toast = useToast();

  const [title, setTitle] = useState("Scheduled: Catch up");
  const [description, setDescription] = useState(
    "Friday, February 10, 2023 at 5:57 PM"
  );
  const [duration, setDuration] = useState(2000);

  const handleClickButton = () => {
    if (!title || !description)
      return alert("제목과 내용을 모두 입력해 주세요");

    toast({ title, description, duration });
  };

  return (
    <div className="grid grid-cols-1 gap-y-6">
      <h1 className="text-2xl font-semibold text-center">토스트 컨트롤러</h1>

      <div className="flex flex-col gap-y-4">
        <Input
          label="제목 (필수)"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="내용 (필수)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label="노출 시간(ms) (선택)"
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>

      <button
        className="bg-black text-white py-3 text-[15px] rounded-md font-medium hover:bg-black/80 transition active:bg-black/70"
        onClick={handleClickButton}
      >
        토스트 띄우기
      </button>
    </div>
  );
}

export default Controller;
