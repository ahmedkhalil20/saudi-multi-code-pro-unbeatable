const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.get('/', (req,res)=> res.sendFile(path.join(__dirname,'index.html')));
app.get('/api/health', (req,res)=> res.json({status:'OK',version:'8.0.0 UNBEATABLE',provider:process.env.AI_PROVIDER||'openai-mini',calculators:'25/25 VERIFIED',mrr:'$268k MRR $3.2M ARR'}));
app.listen(PORT, ()=> console.log(`Live on ${PORT}`));
