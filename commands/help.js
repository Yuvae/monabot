const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (client, message, args) => {

    // try {

    //     var text = "**YT BOT** \n\n **__Commands__** \n !hallo - Geeft een hallo terug. \n !info - Geeft info.";

    //     message.author.send(text);

    //     message.reply("Alle commands kan je vinden in je prive berichten");

    // } catch (error) {
    //     message.reply("Er is iets fout gelopen");
    // }

    var commandList = [];
    var prefix = botConfig.prefix;

    client.commands.forEach(command => {

        var constructor = {
            name: command.help.name,
            description: command.help.description,
            category: command.help.category
        }

        commandList.push(constructor);

    });

    var response = "**Commande de Mona**\n\n";
    var general = "🌍 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 🌍\n";
    var donjon = "🔑 𝗗𝗢𝗡𝗝𝗢𝗡 🔑\n";
    var info = "\n__Fiche des personnages__\n";
    var pyro = "\n🔥 𝗣𝗬𝗥𝗢 🔥\n";
    var hydro = "\n💧 𝗛𝗬𝗗𝗥𝗢 💧\n";
    var cryo = "\n❄️ 𝗖𝗥𝗬𝗢 ❄️\n";
    var electro = "\n⚡ 𝗘𝗟𝗘𝗖𝗧𝗥𝗢 ⚡\n";
    var anemo = "\n🌫️ 𝗔𝗡𝗘𝗠𝗢 🌫️\n";
    var geo = "\n🗻 𝗚𝗘𝗢 🗻\n";
    var dendro = "\n🌸 𝗗𝗘𝗡𝗗𝗥𝗢 🌸\n";

    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];

        if (command["category"] == "Général") {

            general += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "donjon"){

            donjon += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "Fiche des personnages"){

            info += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "pyro"){

            pyro += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "hydro"){

            hydro += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "cryo"){

            cryo += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "electro"){

            electro += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "anemo"){

            anemo += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "geo"){

            geo += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }else if(command["category"] == "dendro"){

            dendro += `${prefix}${command["name"]} - ${command["description"]}\n`;

        }
        
    }

    response += general;
    response += donjon;
    response += info;
    response += pyro;
    response += hydro;
    response += cryo;
    response += electro;
    response += anemo;
    response += geo;
    response += dendro;

    message.author.send(response).then(() => {
        message.channel.send("Toutes les commandes sont dans vos messages privés! :");
    }).catch(() => {
        message.channel.send("Vos messages privés sont désactivés, vous n'avez donc rien reçu.");
    });

}

module.exports.help = {
    name: "help",
    description: "Donne toutes les différentes commandes",
    category: "Algemeen"
}