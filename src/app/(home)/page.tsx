import DateList from "@/components/date-list/date-list";
import ProductionList from "@/components/production-list/production-list";
import { getFrontPreloadProducts } from "./actions";
import { getDateList } from "@/utils/date-list";
import { HashStore } from "@/hooks/use-hash";
import { Provider } from "jotai";
const listReference = getDateList();
const Home: React.FC = async () => {
  const list = await getFrontPreloadProducts();
  console.log(list);
  return (
    <Provider store={HashStore}>
      <div>
        <div className="mt-40 flex flex-col items-center justify-center space-y-8">
          <div className="text-[32px] text-222222 font-bold">
            Discover The Best AI Websites & Tools
          </div>
          <div className="flex items-center font-medium text-xs12 text-222222">
            <span className="text-FADB14">19343</span>&nbsp;&nbsp; AIs and
            &nbsp;&nbsp;
            <span className="text-FADB14">233</span>&nbsp; categories in the
            best AI tools directory. AI tools list & GPTs store are updated
            daily by ChatGPT.
          </div>
          <div className="text-xs14 text-222222 font-medium flex items-center">
            Sponsored by&nbsp;&nbsp;
            <span className="text-FADB14">Dola - AI Calendar Assistant.</span>
          </div>
        </div>
        <div className="px-60">
          <DateList />
          <div className="space-y-24">
            {list.map((v) => {
              const title = listReference.find(
                (vv) => vv?.label === v?.label
              )?.title;
              if (v.products?.length === 0 || !title) return null;
              return (
                <ProductionList
                  key={v?.value}
                  title={title}
                  products={v?.products}
                  timeValue={v?.value}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Home;
