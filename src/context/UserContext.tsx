//React
import { createContext, useEffect, useState } from "react";

//API
import { api } from "../lib/axios";

interface ContextProviderProps {
    children: React.ReactNode;
}

interface UserContextProps {
    userData: UserDataProps | undefined,
    posts: PostProps[],
    getProfileData: () => void,
    getReposData: (query?: string) => void,
}

interface UserDataProps {
    avatar_url: string,
    name: string,
    bio: string,
    login: string,
    location: string,
    company: string,
    html_url: string
}

interface PostProps {
    title: string,
    body: string,
    created_at: string,
    html_url: string,
    user: { login: string },
    comments: number,
    id: number,
    number: number
}

export const UserContext = createContext({} as UserContextProps)

export function UserContextProvider({ children }: ContextProviderProps) {

    const [userData, setUserData] = useState<UserDataProps>()
    const [posts, setPosts] = useState([])

    async function getProfileData() {
        const response = await api.get('/users/joaoknisspell')
        const { avatar_url, name, bio, login, location, company, html_url } = response.data;
        setUserData({
            avatar_url,
            name,
            bio,
            login,
            location,
            company,
            html_url
        })

        // console.log(response.data)
    }

    async function getReposData(query?: string) {
        const response = await api.get('https://api.github.com/search/issues', {
            params: {
                q: query ? `${query}repo:joaoknisspell/github-blog` : 'repo:joaoknisspell/github-blog'
            }
        })

        setPosts(response.data.items)
    }

    useEffect(() => {
        getProfileData()
        getReposData()
    }, [])

    return (
        <UserContext.Provider value={{ userData, posts, getProfileData, getReposData }}>
            {children}
        </UserContext.Provider>
    )
}