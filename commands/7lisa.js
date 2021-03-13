
/*
        "◀": "previous",
        "▶": "next"
*/

const  { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');

/*
Page 1 - Aceuil
Page 2 - Commande
Page 3 - Information
*/
module.exports.run = async (bot, message, args) => {
    console.log(message)
let helpMenu = new Menu(message.channel, message.author.id, [
    {
        name: 'main',
        content: new MessageEmbed()
        .setTitle('Fiche de Lisa')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819979608950308934/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Lisa.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819979608950308934/PRESENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Lisa')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819979602642337833/SUPPORT.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Lisa.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819979602642337833/SUPPORT.jpg')
        .setFooter('Page 2/6')
        ,
        reactions:{
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Lisa')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819979606282207275/DPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Lisa.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819979606282207275/DPS.jpg')
        .setFooter('Page 3/6')
        ,
        reactions:{
        '◀': 'previous',
        '▶': "next"
        
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Lisa')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819979605230092308/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Lisa.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819979605230092308/DNIV.jpg')
        .setFooter('Page 4/6')
        ,
        reactions:{
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Lisa')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819979604302757939/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Lisa.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819979604302757939/DAPP.jpg')
        .setFooter('Page 5/6')
        ,
        reactions:{
        '◀': 'previous', 
        '▶': "next"
    }
    },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Lisa')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819979618392080414/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Catalyseur`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Lisa.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819979618392080414/ARMES.jpg')
        .setFooter('Page 6/6')
        ,
        reactions:{
        '◀': 'previous'
    }
    },
    ], 300000)
        helpMenu.start()
}

module.exports.help = {
    name: "plisa",
    description: "*Fiche de Lisa.*",
    category: "electro"
}