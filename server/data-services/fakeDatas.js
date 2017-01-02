"use strict";

const teamMembers = [{
        firstname: "Pavel",
        lastname: "Angelov",
        image: "https://telerikacademy.com/Content/Avatars/936/37936_083e8ae3_180x180.jpg",
        telerikAccount: "https://telerikacademy.com/Users/p_a_v_el",
        githubAccount: "https://github.com/pavelangelov",
        isTeamMember: true
    },
    {
        firstname: "Veselin",
        lastname: "Krystev",
        image: "https://telerikacademy.com/Content/Avatars/908/33908_ea8f69d8_180x180.jpg",
        telerikAccount: "https://telerikacademy.com/Users/Veselin93",
        githubAccount: "https://github.com/Vekoks",
        isTeamMember: true
    },
    {
        password: "newpass",
        firstname: "Venelin",
        lastname: "Petkov",
        image: "https://telerikacademy.com/Content/Avatars/045/18045_721539aa_180x180.jpg",
        telerikAccount: "https://telerikacademy.com/Users/venelingp",
        githubAccount: "https://github.com/VenelinGP",
        isTeamMember: true
    },
    {
        firstname: "Ivaylo",
        lastname: "Paskalev",
        image: "https://telerikacademy.com/Content/Avatars/171/26171_0dd8fa73_180x180.jpg",
        telerikAccount: "https://telerikacademy.com/Users/IvayloPaskalev",
        githubAccount: "https://github.com/IvayloPaskalev",
        isTeamMember: true
    },
    {
        firstname: "Emil",
        lastname: "Ruzhenov",
        image: "https://telerikacademy.com/Content/Avatars/950/34950_3dcadc58_180x180.jpg",
        telerikAccount: "https://telerikacademy.com/Users/emo_r",
        githubAccount: "https://github.com/emilrr",
        isTeamMember: true
    }
];

const anonymousUser = {
    username: "Anonymous",
    image: "/static/images/pesho.jpg",
    isAnonymous: true
};

const users = [{
        _id: "aabbvvggddee",
        username: "pavel",
        password: "parola",
        firstname: "Pavel",
        lastname: "Angelov",
        image: "https://telerikacademy.com/Content/Avatars/936/37936_083e8ae3_180x180.jpg",
        telerikAccount: "https://telerikacademy.com/Users/p_a_v_el",
        githubAccount: "https://github.com/pavelangelov",
        isTeamMember: true,
        requests: [{
                _id: "venko;Veselin;Krystev",
                requestUser: "venko",
                requestUserFullname: "Veselin Krystev",
                requestUserImage: "https://telerikacademy.com/Content/Avatars/908/33908_ea8f69d8_180x180.jpg"
            },
            {
                _id: "ivaylo;Ivaylo;Paskalev",
                requestUser: "ivaylo",
                requestUserFullname: "Ivaylo Paskalev",
                requestUserImage: "https://telerikacademy.com/Content/Avatars/171/26171_0dd8fa73_180x180.jpg"
            },
            {
                _id: "venelin;Venelin;Petkov",
                requestUser: "venelin",
                requestUserFullname: "Venelin Petkov",
                requestUserImage: "https://telerikacademy.com/Content/Avatars/045/18045_721539aa_180x180.jpg"
            },
            {
                _id: "emil;Emil;Ruzhenov",
                requestUser: "emil",
                requestUserFullname: "Emil Ruzhenov",
                requestUserImage: "https://telerikacademy.com/Content/Avatars/950/34950_3dcadc58_180x180.jpg"
            }
        ],
        friends: [{
                _id: "qqwweerrssaa",
                username: "pesho",
                image: "/static/images/pesho.jpg"
            },
            {
                _id: "mmddvvjjddww",
                username: "gosho",
                image: "/static/images/gosho.jpg"
            },
            {
                _id: "ppllkkddffgg",
                username: "tosho",
                image: "/static/images/tosho.jpg"
            },
            {
                _id: "wwrrmmnnbbff",
                username: "kiro",
                image: "/static/images/kiro.png"
            },
            {
                _id: "aawwqqeegghh",
                username: "marko",
                image: "/static/images/marko.png"
            },
            {
                _id: "ooiiuuyyttdd",
                username: "petko",
                image: "/static/images/petko.png"
            }
        ]
    },
    {
        _id: "zzbbvvggddyy",
        username: "venelinp",
        password: "viplnx",
        firstname: "Venelin",
        lastname: "Petkov",
        image: "https://telerikacademy.com/Content/Avatars/908/33908_ea8f69d8_180x180.jpg",
        telerikAccount: "https://telerikacademy.com/Users/Veselin93",
        githubAccount: "https://github.com/Vekoks",
        isTeamMember: true,
        requests: [],
        friends: []
    },
    {
        _id: "zzwwvvagssyy",
        username: "ivaylo",
        password: "newpass",
        firstname: "Ivaylo",
        lastname: "Paskalev",
        image: "https://telerikacademy.com/Content/Avatars/171/26171_0dd8fa73_180x180.jpg",
        telerikAccount: "https://telerikacademy.com/Users/IvayloPaskalev",
        githubAccount: "https://github.com/IvayloPaskalev",
        isTeamMember: true,
        requests: [],
        friends: []
    },
    {
        _id: "zzwwvvagrryy",
        username: "emil",
        password: "newpass",
        firstname: "Emil",
        lastname: "Ruzhenov",
        image: "https://telerikacademy.com/Content/Avatars/950/34950_3dcadc58_180x180.jpg",
        telerikAccount: "https://telerikacademy.com/Users/emo_r",
        githubAccount: "https://github.com/emilrr",
        isTeamMember: true,
        requests: [],
        friends: []
    },
    {
        _id: "qqwweerrssaa",
        username: "pesho",
        firstname: "Pesho",
        lastname: "Peshev",
        image: "/static/images/pesho.jpg",
        requests: []
    },
    {
        _id: "mmddvvjjddww",
        username: "gosho",
        firstname: "Gosho",
        lastname: "Goshev",
        image: "/static/images/gosho.jpg",
        requests: []
    },
    {
        _id: "ppllkkddffgg",
        username: "tosho",
        firstname: "Tosho",
        lastname: "Toshev",
        image: "/static/images/tosho.jpg",
        requests: []
    },
    {
        _id: "wwrrmmnnbbff",
        username: "kiro",
        firstname: "Kiro",
        lastname: "Kirov",
        image: "/static/images/kiro.png",
        requests: []
    },
    {
        _id: "aawwqqeegghh",
        username: "marko",
        firstname: "Marko",
        lastname: "Markov",
        image: "/static/images/marko.png",
        requests: []
    },
    {
        _id: "ooiiuuyyttdd",
        username: "petko",
        firstname: "Petko",
        lastname: "Petkov",
        image: "/static/images/petko.png",
        requests: []
    }
];

const messages = [{
        _id: "aawweeqqeeqq",
        author: "pesho",
        authorId: "qqwweerrssaa",
        targetUserId: "aabbvvggddee",
        image: "/static/images/pesho.jpg",
        postDate: new Date().toLocaleDateString(),
        content: "Whatzuup bro!"
    }, {
        _id: "aawweeqqeeqq",
        author: "gosho",
        authorId: "mmddvvjjddww",
        targetUserId: "aabbvvggddee",
        image: "/static/images/gosho.jpg",
        postDate: new Date().toLocaleDateString(),
        content: "Kyde se gubish mladej :)"
    }, {
        _id: "aawweeqqeeqq",
        author: "tosho",
        authorId: "ppllkkddffgg",
        targetUserId: "aabbvvggddee",
        image: "/static/images/tosho.jpg",
        postDate: new Date().toLocaleDateString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    }, {
        _id: "aawweeqqeeqq",
        author: "kiro",
        authorId: "wwrrmmnnbbff",
        targetUserId: "aabbvvggddee",
        image: "/static/images/kiro.png",
        postDate: new Date().toLocaleDateString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    }, {
        _id: "aawweeqqeeqq",
        author: "marko",
        authorId: "aawwqqeegghh",
        targetUserId: "aabbvvggddee",
        image: "/static/images/marko.png",
        postDate: new Date().toLocaleDateString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    }, {
        _id: "aawweeqqeeqq",
        author: "petko",
        authorId: "ooiiuuyyttdd",
        targetUserId: "aabbvvggddee",
        image: "/static/images/petko.png",
        postDate: new Date().toLocaleDateString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    },
    {
        _id: "aawweeqqeeqq",
        author: "pesho",
        authorId: "qqwweerrssaa",
        targetUserId: "zzbbvvggddyy",
        image: "/static/images/pesho.jpg",
        postDate: new Date().toLocaleDateString(),
        content: "Whatzuup bro!"
    },
    {
        _id: "aawweeqqeeqq",
        author: "gosho",
        authorId: "mmddvvjjddww",
        targetUserId: "zzbbvvggddyy",
        image: "/static/images/gosho.jpg",
        postDate: new Date().toLocaleDateString(),
        content: "Kyde se gubish mladej :)"
    },
    {
        _id: "aawweeqqeeqq",
        author: "tosho",
        authorId: "ppllkkddffgg",
        targetUserId: "zzbbvvggddyy",
        image: "/static/images/tosho.jpg",
        postDate: new Date().toLocaleDateString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    },
    {
        _id: "aawweeqqeeqq",
        author: "kiro",
        authorId: "wwrrmmnnbbff",
        targetUserId: "zzbbvvggddyy",
        image: "/static/images/kiro.png",
        postDate: new Date().toLocaleDateString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    },
    {
        _id: "aawweeqqeeqq",
        author: "marko",
        authorId: "aawwqqeegghh",
        targetUserId: "zzbbvvggddyy",
        image: "/static/images/marko.png",
        postDate: new Date().toLocaleDateString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    },
    {
        _id: "aawweeqqeeqq",
        author: "petko",
        authorId: "ooiiuuyyttdd",
        targetUserId: "zzbbvvggddyy",
        image: "/static/images/petko.png",
        postDate: new Date().toLocaleDateString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    }
];

const posts = [{
        _id: "aawweeqqeeqq",
        author: "pesho",
        authorId: "qqwweerrssaa",
        targetUserId: "aabbvvggddee",
        image: "/static/images/pesho.jpg",
        postDate: new Date().toLocaleDateString(),
        likes: 0,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    },
    {
        _id: "aawweeqqeeqq",
        author: "gosho",
        authorId: "mmddvvjjddww",
        targetUserId: "aabbvvggddee",
        image: "/static/images/gosho.jpg",
        postDate: new Date().toLocaleDateString(),
        likes: 2,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    },
    {
        _id: "aawweeqqeeqq",
        author: "tosho",
        authorId: "ppllkkddffgg",
        targetUserId: "aabbvvggddee",
        image: "/static/images/tosho.jpg",
        postDate: new Date().toLocaleDateString(),
        likes: 10,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    },
    {
        _id: "aawweeqqeeqq",
        author: "kiro",
        authorId: "wwrrmmnnbbff",
        targetUserId: "aabbvvggddee",
        image: "/static/images/kiro.png",
        postDate: new Date().toLocaleDateString(),
        likes: 0,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    },
    {
        _id: "aawweeqqeeqq",
        author: "marko",
        authorId: "aawwqqeegghh",
        targetUserId: "aabbvvggddee",
        image: "/static/images/marko.png",
        postDate: new Date().toLocaleDateString(),
        likes: 4,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    },
    {
        _id: "aawweeqqeeqq",
        author: "petko",
        authorId: "ooiiuuyyttdd",
        targetUserId: "aabbvvggddee",
        image: "/static/images/petko.png",
        postDate: new Date().toLocaleDateString(),
        likes: 8,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat adipisci natus deserunt ducimus incidunt, velit molestias, obcaecati provident in distinctio quod iste harum beatae reiciendis vel nihil, minus vitae omnis!"
    }
];

module.exports = {
    anonymousUser,
    teamMembers
};