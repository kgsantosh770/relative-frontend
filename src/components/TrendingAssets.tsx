import { TrendingAssetsData } from "../data/TrendingAssetsData";

function TrendingAssets() {
    const assets = TrendingAssetsData.map(asset => (
        <div className="trending-asset flex flex-col justify-center items-center mr-[70px] mb-9">
            <div
                className="
                        asset-img 
                        w-[100px] 
                        h-[100px] 
                        rounded-full
                        flex
                        justify-center
                        items-center
                    ">
                <img
                    src={asset.icon}
                    alt="bitcoin"
                    title="Bitcoin"
                    className="w-[49px] h-[49px]"
                />
            </div>
            <div className="card min-w-[291px] mt-[-50px] px-[24px] text-[12px] leading-[31px] text-center">
                <p className="title text-blue-text font-bold mt-[71px]">{asset.name}</p>
                <div className="value-status bg-primary-color rounded-2xl mt-[12.5px] px-[20px] relative flex flex-row">
                    <span className="value text-[16px] flex-auto text-right">${asset.price.toLocaleString(undefined,{maximumFractionDigits: 20,minimumFractionDigits: 2})}</span>
                    <span 
                    className={`
                    percent-change 
                    ${asset.percentageChange < 0 ? "text-decrease-value" : "text-increase-value"}
                    w-[62px] 
                    pl-4`}
                    >{asset.percentageChange >= 0 && "+"}{asset.percentageChange}%</span>
                </div>
                <p className="text-light-blue-text mt-[4.5px]">Price</p>
                <div className="tvl bg-primary-color mx-auto rounded-full mt-[8.5px]">
                    <p className="tvl-value text-[16px]">${asset.tvl.toLocaleString(undefined, {maximumFractionDigits: 3})}</p>
                </div>
                <p className="text-light-blue-text mt-[4.5px]">TVL</p>
                <div className="popular-pairs flex flex-row justify-between max-w-[121px] px-[15px] py-[9px] bg-primary-color mx-auto rounded-full mt-[12px]">
                    <img className="h-[22px] 2-[22px]" src="./images/solana.png" alt="solana" title="Solana" />
                    <img className="h-[22px] 2-[22px]" src="./images/ethereum.png" alt="ethereum" title="Ethereum" />
                    <img className="h-[22px] 2-[22px]" src="./images/binance.png" alt="binance" title="Binance" />
                </div>
                <p className="text-light-blue-text">Popular Pairs</p>
            </div>
        </div>
    ))

    return (
        <section className="trending-assets text-white-text flex flex-row flex-wrap justify-center my-9">
            {assets}
        </section>
    )
}

export default TrendingAssets;