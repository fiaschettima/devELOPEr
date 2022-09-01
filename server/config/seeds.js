const db = require('./connection');
const { User } = require('../models');

db.once('open', async () => {
    await User.deleteMany();
    await User.create({
        email: 'test@email.com',
        password: 'password123',
        profile: {
            firstName: "Vince",
            lastName: "Lee",
            age: 22,
            location: "Berkeley, CA",
            job: 'Full Stack Developer',
            gender: 'he/his',
            interest: [
                '🍬 black licorice',
                '☕ Earl Gray tea',
                '🐿️ squirrels',
                '🦊 having too many tabs open',
                '🖥️ using one monitor'
            ],
            github: 'https://github.com/StarryBlue7/',
            linkedin: 'https://www.linkedin.com/in/vince-lee/',
            images: [
                'http://res.cloudinary.com/dhuyyu7wp/image/upload/v1662002913/jksleisc78qcnekcrl8k.jpg',
                'http://res.cloudinary.com/dhuyyu7wp/image/upload/v1662002913/c9xzmqkd1qufcsb913no.jpg',
                'http://res.cloudinary.com/dhuyyu7wp/image/upload/v1662002913/qkxgy1m3ocwvw9fghmza.jpg',
                'http://res.cloudinary.com/dhuyyu7wp/image/upload/v1662002914/alooofgr267tssynv0xq.png',
                'http://res.cloudinary.com/dhuyyu7wp/image/upload/v1662002914/b3f5wo7ybldszidvitv5.jpg',
                'http://res.cloudinary.com/dhuyyu7wp/image/upload/v1662002914/tztmnb07cvgyqlawbl9g.jpg',
                'http://res.cloudinary.com/dhuyyu7wp/image/upload/v1662002914/h2j8xwoynzvqmyyjueez.webp',
                'http://res.cloudinary.com/dhuyyu7wp/image/upload/v1662002914/hlb8vu3ilda55uxief3e.jpg',
                'http://res.cloudinary.com/dhuyyu7wp/image/upload/v1662002914/nvjwzbyqzeebeowzsbor.webp',
                'http://res.cloudinary.com/dhuyyu7wp/image/upload/v1662002914/rfqdgq4cfkglpxdauuul.jpg',
                'http://res.cloudinary.com/dhuyyu7wp/image/upload/v1662002914/zhy26gu2q5ptrtwdeqbb.jpg',
                'http://res.cloudinary.com/dhuyyu7wp/image/upload/v1662002915/zxfayjb1fq8t9kevfthp.jpg'
            ]
        }
    })
    console.log('Vince has been seeded')
    process.exit();
});