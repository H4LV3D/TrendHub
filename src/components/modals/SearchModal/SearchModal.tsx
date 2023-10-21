import React from "react";
import SearchBox from "@/components/shared/search/Search";
import ModalLayout from "@/layouts/ModalLayout/ModalLayout";
import pageData from "@/data/index.json";
import { hideMobileSidebar } from "@/store/slices/mobileSidebar/mobileSidebarSlice";
import { hideSearchBox } from "@/store/slices/searchbox/searchBoxSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";

type Props = {};

const SearchModal = ({}: Props) => {
  const { blogs } = pageData;
  const dispatch = useAppDispatch();
  return (
    <div>
      <ModalLayout>
        <div className="border rounded-lg bg-white p-6">
          <div className="flex justify-between items-center pb-4">
            <h1 className="font-raleway font-medium text-xl">Search</h1>
            <button
              className="font-raleway text-base"
              onClick={() => dispatch(hideSearchBox())}
            >
              <i className="fas fa-times"></i>Close
            </button>
          </div>
          <SearchBox blogs={blogs} />
        </div>
      </ModalLayout>
    </div>
  );
};

export default SearchModal;
