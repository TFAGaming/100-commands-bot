## → Setup Guide:
### -Setup Your Discord Bot:
First of all, you need to create a [Discord Bot](https://discord.com/developers/applications). Invite the bot in the server which you want be in, and copy the Bot Token. **[Do not share your bot Token].**
_Your Discord Bot works in only one server._

### -Setup The Code:
Follow the steps below:

#### - **Replit Setup:**

Create a file called `.replit`, copy this code below and paste it in your new file `.replit`. Then, Refresh your replit project.
```
language = "nodejs"
run = "node ."
```

#### - **Bot Token Setup:**

Now, go to Secrets (The Lock Icon) on the Left side of your Replit project page. Type in the _Key_ case `TOKEN` and paste your bot token that you copied in the _Value_ case. Click on _Add New Secret_.

#### - **Config.json Setup:**

I advice you to not change the bot prefix in `config.json` because in the `help.js`, you need  to change a lot of things when you change the bot prefix.

**Config.json Default Settings:**
```js
{
    "prefix": "dc!",
}  

```

#### **- Server Setup:**

Nothing is important to change, Everything looks good! You can change the bot messages in the Cathegory `commands`.

## Copyright Info:
**You are not allowed to share the code when you do not have permission from T.F.A#1887 to share this code.**
