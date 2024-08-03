"use client";
import React, { useState } from "react";
import proposals, { Proposal } from "./data/proposalData";
import ProposalItem from "./ProposalItem";
import ReactPaginate from "react-paginate";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ProposalsList = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = [...proposals].slice(itemOffset, endOffset);
  const pageCount = Math.ceil(proposals.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % proposals.length;
    setItemOffset(newOffset);
  };

  const paginateNavStyle =
    "block  bg-color-gold py-[0.5rem] px-[1rem] rounded-lg  border border-color-primary-1 text-color-white hover:bg-color-dark-blue transition-all tableData-200 ease-in capitalize ";
  return (
    <div>
      <ul className="pt-[3rem]">
        {currentItems.map((proposal: Proposal) => (
          <ProposalItem
            key={proposal.id}
            id={proposal.id}
            title={proposal.title}
            startTime={proposal.startTime}
            endTime={proposal.endTime}
          />
        ))}
      </ul>
      {/* react paginate */}
      <div className="flex mt-[2rem] w-full pt-[3.5rem] pb-[3rem]  justify-end">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <p className="flex items-center ">
              <span>next</span>
              <MdKeyboardArrowRight className="text-color-current ml-[0.5rem] w-[2.2rem] h-[2.2rem]" />
            </p>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={
            <p className="flex items-center">
              <MdKeyboardArrowLeft className="text-color-current mr-[0.5rem] w-[2.2rem] h-[2.2rem]" />
              <span>previous</span>
            </p>
          }
          renderOnZeroPageCount={null}
          containerClassName="flex items-center "
          previousClassName="mr-[1rem]"
          nextClassName="ml-[1rem]"
          previousLinkClassName={paginateNavStyle}
          nextLinkClassName={paginateNavStyle}
          pageLinkClassName="paginate-page-link"
          activeLinkClassName="paginate-active-page-link"
        />
      </div>
    </div>
  );
};

export default ProposalsList;
