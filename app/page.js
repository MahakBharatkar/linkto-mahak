const linkInfo = [
  {
    link_text: "My Instagram",
    url: "https://www.instagram.com/nyctophiles221?igsh=MXQzM2MxOXZ4bmw3eg%3D%3D&utm_source=qr",
    image: "/mahak_insta.png",
    isDownload: false,
  },
  {
    link_text: "My Portfolio Website",
    url: "https://mahak-portfolio.vercel.app/",
    image: "/android-chrome-192x192.png",
    isDownload: false,

  },
  {
    link_text: "Visit online store | Calligraphy supplies",
    url: 'https://nyctophiles.myinstamojo.com/',
    image: "/mahak_insta.png",
    isDownload: false,

  },
  {
    link_text: "2026 Bingo Card",
    url: '/2026BingoCard.pdf',
    image: "/2026BingoCard.jpg",
    isDownload: true,
  }

];

export default function Home() {
  return (
    <div className="h-full bg-slate-100 pt-0 pb-20 px-1.5">
      <div className="flex justify-center flex-col items-center">
        <img src="/mahak_calligraphy.png" width={300} height={300} />
        <p className="text-lg font-semibold mb-4">Mahak Bharatkar</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-2 gap-y-3">
        {linkInfo.map((item) => {
          return (
            <a 
            href={item.url} 
            key={item.link_text}
            download={item.isDownload ? "2026BingoCard.pdf" : undefined}
            target={item.isDownload ? "_self" : "_blank"}
            >
              <div
                className="bg-[#C84C45] rounded-lg shadow-xl min-h-[50px] px-2 py-2 flex items-center justify-start"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    width={30}
                    height={30}
                    alt="image"
                    className="rounded-full mr-4"
                  />
                ) : null}
                <span className="text-slate-100 text-base">
                  {item.link_text}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
