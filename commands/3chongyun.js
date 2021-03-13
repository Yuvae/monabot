
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
        .setTitle('Fiche de Chongyun')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819974333714923430/presentation.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Chongyun.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819974333714923430/presentation.jpg')
        .setFooter('Page 1/6')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "otherPage",
        content: new MessageEmbed()
        .setTitle('Fiche de Chongyun')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819974331877949480/DPS.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Chongyun.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819974331877949480/DPS.jpg')
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
        .setTitle('Fiche de Chongyun')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819974324729744206/support.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Chongyun.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819974324729744206/support.jpg')
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
        .setTitle('Fiche de Chongyun')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819974331442134041/DNIV.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Chongyun.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819974331442134041/DNIV.jpg')
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
        .setTitle('Fiche de Chongyun')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819974329999163442/DAPP.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Chongyun.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819974329999163442/DAPP.jpg')
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
        .setTitle('Fiche de Chongyun')
        .setURL('https://cdn.discordapp.com/attachments/803271484822388737/819974327964794890/ARMES.jpg')
        .setAuthor(`Mona`, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFw-34sK4vcdfyGJPGJTf-4rws91U-UZrQA&usqp=CAUnode')
        .setColor('AQUA')
        .addField('Rang :', `4★`)
        .addField('Arme :', `Epee à deux mains`)
        .addField('Element :', 'Cryo')
        .setThumbnail('https://www.genshin-impact.fr/wp-content/uploads/2020/07/Chongyun.png')
        .setImage('https://cdn.discordapp.com/attachments/803271484822388737/819974327964794890/ARMES.jpg')
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
    name: "pchongyun",
    description: "*Fiche de Chongyun.*",
    category: "cryo"
}