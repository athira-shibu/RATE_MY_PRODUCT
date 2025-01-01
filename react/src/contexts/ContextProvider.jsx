import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    surveys:[],
    setCurrentUser: () => {},
    setUserToken: () => {}
})

const tmpSurveys = [
    {
        "id": 1,
        "image_url": "https://via.placeholder.com/150",
        "title": "Customer Feedback Survey",
        "slug": "customer-feedback-survey",
        "status": "active",
        "description": "A survey designed to gather feedback from customers about their experience with our products and services.",
        "created_at": "2024-12-01T10:00:00Z",
        "updated_at": "2024-12-20T15:30:00Z",
        "expire_date": "2024-12-31T23:59:59Z",
        "questions": [
          {
            "id": 101,
            "type": "multiple_choice",
            "question": "How satisfied are you with our product?",
            "description": "Please select one of the following options that best describes your satisfaction level.",
            "data": [
              { "uuid": "a1b2c3d4", "text": "Very satisfied" },
            ]
          },
          {
            "id": 102,
            "type": "text",
            "question": "What can we do to improve your experience?",
            "description": "Feel free to share any specific suggestions or feedback.",
            "data": []
          },
          {
            "id": 103,
            "type": "rating",
            "question": "Rate your overall experience with our customer service.",
            "description": "Please provide a rating between 1 (Poor) and 5 (Excellent).",
            "data": [
              { "uuid": "r1s2t3u4", "text": "1" },
            ]
          }
        ]
    },
    {
    "id": 2,
    "image_url": "https://via.placeholder.com/150",
    "title": "Customer Feedback Survey",
    "slug": "customer-feedback-survey",
    "status": "active",
    "description": "A survey designed to gather feedback from customers about their experience with our products and services.",
    "created_at": "2024-12-01T10:00:00Z",
    "updated_at": "2024-12-20T15:30:00Z",
    "expire_date": "2024-12-31T23:59:59Z",
    "questions": [
        {
        "id": 101,
        "type": "multiple_choice",
        "question": "How satisfied are you with our product?",
        "description": "Please select one of the following options that best describes your satisfaction level.",
        "data": [
            { "uuid": "a1b2c3d4", "text": "Very satisfied" },
        ]
        },
        {
        "id": 102,
        "type": "text",
        "question": "What can we do to improve your experience?",
        "description": "Feel free to share any specific suggestions or feedback.",
        "data": []
        },
        {
        "id": 103,
        "type": "rating",
        "question": "Rate your overall experience with our customer service.",
        "description": "Please provide a rating between 1 (Poor) and 5 (Excellent).",
        "data": [
            { "uuid": "r1s2t3u4", "text": "1" },
        ]
        }
    ]
    },
    {
    "id": 3,
    "image_url": "https://via.placeholder.com/150",
    "title": "Customer Feedback Survey",
    "slug": "customer-feedback-survey",
    "status": "active",
    "description": "A survey designed to gather feedback from customers about their experience with our products and services.",
    "created_at": "2024-12-01T10:00:00Z",
    "updated_at": "2024-12-20T15:30:00Z",
    "expire_date": "2024-12-31T23:59:59Z",
    "questions": [
        {
        "id": 101,
        "type": "multiple_choice",
        "question": "How satisfied are you with our product?",
        "description": "Please select one of the following options that best describes your satisfaction level.",
        "data": [
            { "uuid": "a1b2c3d4", "text": "Very satisfied" },
        ]
        },
        {
        "id": 102,
        "type": "text",
        "question": "What can we do to improve your experience?",
        "description": "Feel free to share any specific suggestions or feedback.",
        "data": []
        },
        {
        "id": 103,
        "type": "rating",
        "question": "Rate your overall experience with our customer service.",
        "description": "Please provide a rating between 1 (Poor) and 5 (Excellent).",
        "data": [
            { "uuid": "r1s2t3u4", "text": "1" },
        ]
        }
    ]
    }
      
]

export const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    })
    const [userToken, setUserToken] = useState('1234')
    const [surveys, setSurveys] = useState(tmpSurveys)
    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            surveys
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)