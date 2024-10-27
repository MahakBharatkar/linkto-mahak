const linkInfo = [
  {
    link_text: "My Instagram",
    url: "https://www.instagram.com/nyctophiles221?igsh=MXQzM2MxOXZ4bmw3eg%3D%3D&utm_source=qr",
    image: "/mahak_insta.png",
  },
  {
    link_text: "My Portfolio Website",
    url: "https://mahak-portfolio.vercel.app/",
    image: "/android-chrome-192x192.png",
  },
  {
    link_text: "Visit online store | Calligraphy supplies",
    url: 'https://nyctophiles.myinstamojo.com/',
    image: "/mahak_insta.png",
  },
  {
    link_text: "Harish-30",
    url: 'https://fastrr-boost-ui.pickrr.com/?platform=SHOPIFY&fbp=fb.1.1717422565361.150236918&userDeviceId=73cd1c2f-4520-4a34-9e7c-099e30d25a48&userSessionId=73cd1c2f-4520-4a34-9e7c-099e30d25a48-1730041190667&cart=JTVCJTdCJTIycHJvZHVjdElkJTIyJTNBODAwNjE5MDEwNDgwMyUyQyUyMnRpdGxlJTIyJTNBJTIyU2hlJTIwQ2FyZSUyMEp1aWNlJTIwLSUyMDEwMDAlMjBtbCUyMCU3QyUyMFBhY2slMjBvZiUyMDElMjIlMkMlMjJ2YXJpYW50SWQlMjIlM0E0MzY1NzQwMzEzODI3NSUyQyUyMnZhcmlhbnRUaXRsZSUyMiUzQSUyMjEwMDAlMjBtbCUyMCU3QyUyMFBhY2slMjBvZiUyMDElMjIlMkMlMjJwcmljZSUyMiUzQTUwMCUyQyUyMnF1YW50aXR5JTIyJTNBMSUyQyUyMmltYWdlJTIyJTNBJTIyaHR0cHMlM0ElMkYlMkZjZG4uc2hvcGlmeS5jb20lMkZzJTJGZmlsZXMlMkYxJTJGMDU3MCUyRjkwNzAlMkYzNTU2JTJGZmlsZXMlMkZTaGVDYXJlSnVpY2UuanBnJTNGdiUzRDE3MjM1MzcxNjMlMjIlMkMlMjJpdGVtX21ldGFfZGF0YSUyMiUzQSU3QiU3RCUyQyUyMmN1c3RvbUF0dHJpYnV0ZXMlMjIlM0ElN0IlN0QlMkMlMjJ2ZW5kb3IlMjIlM0ElMjJLcmlzaG5hJ3MlMjBIZXJiYWwlMjAlMjYlMjBBeXVydmVkYSUyMiUyQyUyMnByb2R1Y3RfdHlwZSUyMiUzQSUyMkp1aWNlcyUyMiU3RCU1RA==&ipAddress=3.111.202.221&utm_params=dGltZV92aXNpdGVkPTIwMjQtMTAtMjdUMTU6MDA6MDQuMzU5Wg==&uuid=851b841e&channel=JTdCJTIyc2hvcF9uYW1lJTIyJTNBJTIyY29tcGFueS1sb2dvJTIyJTJDJTIyc2hvcF91cmwlMjIlM0ElMjJrcmlzaG5hYXl1cnZlZC5jb20lMjIlMkMlMjJyZWRpcmVjdFVybCUyMiUzQSUyMmh0dHBzJTNBJTJGJTJGa3Jpc2huYWF5dXJ2ZWQuY29tJTJGY2FydCUyRjQzNjU3NDAzMTM4Mjc1JTNBMSUyMiUyQyUyMmNyZWRJbnN0YWxsZWQlMjIlM0FmYWxzZSU3RA==&type=product',
    image: "/mahak_insta.png",
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
            <a href={item.url} key={item.link_text}>
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
