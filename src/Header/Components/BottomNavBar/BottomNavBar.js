import { useState } from "react"
import { useNavigate } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import SearchIcon from "@mui/icons-material/Search"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined"
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary"
import PageviewIcon from "@mui/icons-material/Pageview"
import HistoryIcon from "@mui/icons-material/History"

import "./BottomNavBar.css"
import {
  HistoryOutlined,
  Subscriptions,
  SubscriptionsOutlined,
} from "@mui/icons-material"
export const BottomNavBar = (props) => {
  const [activeTabs, setActiveTabs] = useState("home")
  const navigate = useNavigate()

  return (
    <div className="bottom-nav">
      <div className="bn-tab">
        {activeTabs === "home" ? (
          <HomeIcon
            size="35"
            color="#000"
            className="color-icon"
            onClick={() => {
              setActiveTabs("home")
              navigate("/")
            }}
          />
        ) : (
          <HomeOutlinedIcon
            size="35"
            color="#000"
            onClick={() => {
              setActiveTabs("home")
              navigate("/")
            }}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === "search" ? (
          <HistoryIcon
            size="35"
            color="#000"
            className="color-icon"
            onClick={() => {
              setActiveTabs("search")
              navigate("history")
            }}
          />
        ) : (
          <HistoryOutlined
            size="35"
            color="#000"
            onClick={() => {
              setActiveTabs("search")
              navigate("history")
            }}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === "favourites" ? (
          <Subscriptions
            size="35"
            className="color-icon"
            onClick={() => {
              setActiveTabs("favourites")
              navigate("playlists")
            }}
          />
        ) : (
          <SubscriptionsOutlined
            size="35"
            color="#000"
            onClick={() => {
              setActiveTabs("favourites")
              navigate("playlists")
            }}
          />
        )}
      </div>
      <div className="bn-tab">
        {activeTabs === "account" ? (
          <VideoLibraryIcon
            size="35"
            color="#000"
            className="color-icon"
            onClick={() => {
              setActiveTabs("account")
              navigate("account")
            }}
          />
        ) : (
          <VideoLibraryOutlinedIcon
            size="35"
            color="#000"
            onClick={() => {
              setActiveTabs("account")
              navigate("account")
            }}
          />
        )}
      </div>
    </div>
  )
}
