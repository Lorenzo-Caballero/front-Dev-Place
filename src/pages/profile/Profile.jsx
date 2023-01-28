import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rigthbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";


export default function Profile() {
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACyCAMAAADRVGVaAAAAM1BMVEXk5ueutLersbTR1NXn6erq7O2orrK8wcPg4uOzuLu5vsHJzc/c3uDZ3N22u77N0dPDx8nEzTwlAAAEj0lEQVR4nO2cx5LkIAxAMYhgbLD//2sX3GF7OhLUgq7iHaZ2Zi+vVEIkYcYGg8FgMBgMBoPBYDAYDAaDwWAwGAz6BSD+NJHwb2it8xEpmdv2XVsfsHrfHJM9W4Nkwk584pHj5xR+s4LJ1mYvcVqpYHmPUnplHYYamNDPfC/Sorusls7yV8IRzu3aVXoA7G+FD+lp6yjQ4OZPwkd6+LUXZ9imFOMYaNGHM2wvh92DM996SOiQxonCh/TePs55xiGhl9bOclFZxiHOW1tnueXF+KDpGASXLxzqRstaZ5Lq8YOzb2ecO/QuqL1VqZMud+hd4+xapUahcLvUgKUsLQ7nJpUO1rnYuFGYa4IcRmCL4mwqghyhVwZRWi7OYaYvGtLX5EXIZk1em01dkIOzIQ5z/gruQZm6zoGvNA6ZQWxsao2nyRtaZVE3+CIzbc2ApT7KfKM0ZkwjKNPuXI2tTwyuKZVhrS4YgZnQOJ5oIShPtMoYxpyyyiEprz+nrEiVEWaSuGklVUYwJo4yUi4TFuafrBgodZlUueZA4AInnf1w1hiWdlui65UV7UoO9mpj6vUylJze30O8K1nrlYn3fgyqSwb1DpvJwgP8G2Xy27S1+uiF/JJH1mYGcVVm8Vjg504+a8+XeYubh6oBqJYG92hVC1DiJdHVuSLM9BXuhClXpp75Lsit+Ha1WbMAFK6aG9yTXDGJfVB3xhP1NckNZWvQdpfukZLVEV8aCgcge0fVvIcLcneBSjdvsgVmc0qdIj26f+WckxutZr07QH5uqz0Lt+6R+0+odSnOfBY9dHyeAOM/J7TSDWeQJ8hteh9pPrnenj5ItviXTcFc+aWjFvErYDbPn+UH5170lRP/AbbuSv1JEB5+37t8onFFSrPt1p+2srO3u4gPejonPosyZnXOrebyYKpv5AP9SsMRXieWXWs7H3it92Vzzpz+sx+iTEiEbfdxsMXhx2+KhTr+5O0iTnnS3hwkGLFoH9XeTCVRnc8dvKUDydwSqgNPXhaFKqKFaVdDwOmS7WpIk63BzBJSUuxT8qud+2grZYM1aZ8OhHxITIZX1nyOswyRNcjVfli2pVlPXpA4A4i59s7hSlh/fD2rgTlbmsHPpaflu9LSaYSMuJOel+8t9CTDF458bcMCbEFNiVuU/caNGrjKTva38EmgZ0fy+9RiaY376BkYQsvIJ+cJ85QD3FeG3T1qx1PGaL5IcsY6nKm5LMuEexRn+f00vnFW9YUDTNbxMYJ09UWKQWjVylOubTnKvwpBcK7KZ9C0WXGWrpi9a9tESpXLb7hxGqtLnIubu8quezEo/lZC0VN2JOeisiH3Jol8hhdMKWEp1NC47NqYcp5+RnZq1L2yRiD/cXnZZyRQnTObeRpNIn+UMx+XQ3Pj3Df85b1ZiPA5K8woz0ZqycnmZouLv+TUZsLd3lvm9JVz7XcksEjPDJyncQjw5ION5jPfhYwZkH7D94Lk160InzhAInk2QXiZg0Tq7gSKP/qEDrdph6HQw2x9IU057KB4L6jEKDvRDcSf0BgMBoPBYDAYDH6ef/JVPCZD+9sXAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Mi perfil</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}