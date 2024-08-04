"use client";
import ProposalsList from "@/components/ProposalsList";
import { useAppDispatch, useAppSelector } from "@/hooks/customHook";
import { proposalActions } from "@/slices/proposalsSlice";
import { RiMenu4Line } from "react-icons/ri";

export default function Home() {
  const { account } = useAppSelector((state) => state.wallet);

  const dispatch = useAppDispatch();

  const displayCreateProposalModal = () => {
    dispatch(proposalActions.toggleCreateProposalModal(true));
  };

  return (
    <main className=" min-h-screen w-full  font-ptSans">
      <section className="px-[15rem] py-[5rem]">
        <p className="font-londrinaSolid text-color-gray-2 text-[2.5rem] ">
          Governance
        </p>
        <h1 className="font-londrinaSolid text-[4.5rem]">Yuan DAO</h1>
        <p className="text-[1.8rem] text-color-black-3">
          Yuan govern Yuan DAO. Yuans can vote on proposals or delegate their
          vote to a third party. A minimum of 2 Yuans is required to submit
          proposals.
        </p>
        <div className="mt-[2rem] rounded-xl border border-color-border flex">
          <div className="p-[2rem] flex-1">
            <p className="font-londrinaSolid text-color-gray-2 text-[2rem]">
              Treasury
            </p>
            <div className=" mt-[1.5rem] flex items-center">
              <RiMenu4Line className="w-[2.5rem] h-[2.5rem]" />
              <p className="font-londrinaSolid text-[3rem] mx-[.5rem]">5000</p>
              <div className="self-stretch flex items-center border-l ml-[2rem] pl-[1rem] border-color-borde font-londrinaSolid text-color-gray-2 text-[3rem]">
                <p>$15,303,223</p>
              </div>
            </div>
          </div>
          <div className="border-l border-color-border p-[2rem] w-[35%]">
            <p>
              This treasury exists for Yuan DAO participants to allocate
              resources for the long-term growth and prosperity of the Yuan
              project.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="  w-full relative flex">
          <div className="border-b border-color-gold w-[15rem]"></div>
          <p className="py-[1rem] px-[1.5rem] font-londrinaSolid text-[3rem] border-t border-l border-r border-color-gold rounded-tl-xl rounded-tr-xl ">
            Proposals
          </p>
          <div className="border-b border-color-gold flex-1 flex items-center justify-end pr-[15rem]">
            {!account ? (
              <p className="text-color-gray-2">
                Connect wallet to create a proposal
              </p>
            ) : (
              <button
                type="button"
                className="px-[1rem] py-[0.5rem] rounded-xl border-color-gold bg-color-gold border text-color-white text-[1.8rem] hover:bg-color-white hover:text-color-gold transition-all duration-150 ease-in"
                onClick={displayCreateProposalModal}
              >
                Create Proposal
              </button>
            )}
          </div>
        </div>
        <div className="px-[15rem]">
          <ProposalsList />
        </div>
      </section>
    </main>
  );
}
