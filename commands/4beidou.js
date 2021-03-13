
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
        .setTitle('Fiche de Beidou')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819978893620412457/PRESENTATION.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Beidou.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819978893620412457/PRESENTATION.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Beidou')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819978892319522836/MAINDPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Beidou.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819978892319522836/MAINDPS.jpg')
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
        .setTitle('Fiche de Beidou')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819978887773028352/SUPPORT.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Beidou.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819978887773028352/SUPPORT.jpg')
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
        .setTitle('Fiche de Beidou')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819978891258495016/dniv.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Beidou.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819978891258495016/dniv.jpg')
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
        .setTitle('Fiche de Beidou')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819978889161605120/dapp.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Beidou.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819978889161605120/dapp.jpg')
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
        .setTitle('Fiche de Beidou')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819978903367581726/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('PURPLE')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Electro')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Beidou.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819978903367581726/ARMES.jpg')
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
    name: "pbeidou",
    description: "*Fiche de Beidou.*",
    category: "electro"
}