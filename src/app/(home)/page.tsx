import ProductionList from "@/components/production-list/production-list";

const Home: React.FC = () => {
  return (
    <div>
      <div className="mt-40 flex flex-col items-center justify-center space-y-8">
        <div className="text-[32px] text-222222 font-bold">
          Discover The Best AI Websites & Tools
        </div>
        <div className="flex items-center font-medium text-xs12 text-222222">
          <span className="text-FADB14">19343</span>&nbsp;&nbsp; AIs and
          &nbsp;&nbsp;
          <span className="text-FADB14">233</span>&nbsp; categories in the best
          AI tools directory. AI tools list & GPTs store are updated daily by
          ChatGPT.
        </div>
        <div className="text-xs14 text-222222 font-medium flex items-center">
          Sponsored by&nbsp;&nbsp;
          <span className="text-FADB14">Dola - AI Calendar Assistant.</span>
        </div>
      </div>
      <div className="px-60">
        <ProductionList />
      </div>
    </div>
  );
};

export default Home;
