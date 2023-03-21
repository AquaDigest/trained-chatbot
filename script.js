var _0x47c0f3 = _0x554a; (function (_0x5b1f03, _0x497281) { var _0xbfc2ab = _0x554a, _0x140f1d = _0x5b1f03(); while (!![]) { try { var _0x44ada2 = -parseInt(_0xbfc2ab(0x146)) / 0x1 * (-parseInt(_0xbfc2ab(0x148)) / 0x2) + -parseInt(_0xbfc2ab(0x14a)) / 0x3 + -parseInt(_0xbfc2ab(0x14c)) / 0x4 + -parseInt(_0xbfc2ab(0x14d)) / 0x5 * (parseInt(_0xbfc2ab(0x14f)) / 0x6) + parseInt(_0xbfc2ab(0x14b)) / 0x7 + parseInt(_0xbfc2ab(0x14e)) / 0x8 * (-parseInt(_0xbfc2ab(0x150)) / 0x9) + parseInt(_0xbfc2ab(0x147)) / 0xa; if (_0x44ada2 === _0x497281) break; else _0x140f1d['push'](_0x140f1d['shift']()); } catch (_0x337b49) { _0x140f1d['push'](_0x140f1d['shift']()); } } }(_0x56cc, 0x1d013)); var key = _0x47c0f3(0x149); function _0x554a(_0x558217, _0x4e4d69) { var _0x56cc41 = _0x56cc(); return _0x554a = function (_0x554abd, _0x54141c) { _0x554abd = _0x554abd - 0x146; var _0x171570 = _0x56cc41[_0x554abd]; return _0x171570; }, _0x554a(_0x558217, _0x4e4d69); } function _0x56cc() { var _0x13c31a = ['209720ikMDGo', '458080HyrGiU', '85mTvtYd', '93008OetVvD', '26958llXlMu', '135ZInDKz', '19wkabdJ', '5184710vAjLaY', '2298SRYFzx', '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', '258504bhhFqi']; _0x56cc = function () { return _0x13c31a; }; return _0x56cc(); }
var xhr = new XMLHttpRequest();
xhr.open("GET", "key.txt", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        key = xhr.responseText;
    }
};
xhr.send();



// sss

function init() {
  let res_elm = document.createElement("div");
  res_elm.innerHTML = "Hello Myself Dara, How can I help you?";
  res_elm.setAttribute("class", "left");

  document.getElementById('msg').appendChild(res_elm);
}


document.getElementById('reply').addEventListener("click", async (e) => {
  e.preventDefault();

  let data_req = document.createElement('div');
  let data_res = document.createElement('div');

  let container1 = document.createElement('div');
  let container2 = document.createElement('div');

  container1.setAttribute("class", "msgCon1");
  container2.setAttribute("class", "msgCon2");

  data_req.setAttribute("class", "right");
  data_res.setAttribute("class", "left pre");



  var req = document.getElementById('msg_send').value;
  data_req.innerHTML = req;
  console.log(req)
  if (req == undefined || req == "") {
    alert("Please type something")
  }
  else {
    data_res.innerHTML = "Typing..";
    var url = "https://api.openai.com/v1/chat/completions";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader(
      "Authorization",
      `Bearer ${key}`
    );
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        let response = xhr.responseText;
        response = JSON.parse(response);
        var res =
          response.choices[0].message.content;
        data_res.innerHTML = res;
      }

    }

    // console.log(res)
    // var question = document.getElementById("question").value;




    prompt = req;

    var data = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: "system", content:
            `You are ChatGPT, a large language model trained by OpenAI. If user asks question other than Aquaculture topic please respond him with message I can only answer aquaculture topic related questions.

            Train yourself on following information provided and answer questions.
            \n
            Indoor Vs Outdoor Fish Farming. What Should You Choose?
            Indoor fish farming allows control over conditions, which leads to a high-quality product, but it requires expensive equipment and higher maintenance. Outdoor fish farming is less expensive, but fish are exposed to predators, weather, and water quality issues. The choice of farming method depends on the specific circumstances of the farmer. The article also discusses profitability, sustainability, risks, and space efficiency.
            \n
            The Current Laws & Regulations on Fish Farming 2022
            Fish farming is regulated by federal, state, and tribal governments in the United States. The primary federal law governing fish farming is the Magnuson-Stevens Fishery Conservation and Management Act. State laws governing fish farming vary, while the EPA, USDA, and FDA regulate fish farming through policies and procedures. Violations of regulations can result in fines, jail time, and loss of license.
            \n
            Pond Vs River Fish Farming. What Is Better?
            Ponds are lower in cost and easier to maintain but are susceptible to pollution and disease. Pools and rivers offer a more natural environment for fish but can be more expensive to set up and maintain, and there is a risk of fish escaping. Pond aquaculture is best for small-scale farmers, while pools and rivers are used by commercial fish farmers
            \n
            Sustainability in Aquaculture: Balancing Production and Conservation
            Sustainable aquaculture,is a method of raising aquatic organisms for food production while conserving marine and freshwater resources. Sustainable aquaculture involves maintaining water quality, supporting healthy fish and shellfish populations, conserving habitats, preserving genetic diversity, contributing to food security, and reducing pollution. While there are challenges to sustainable aquaculture, such as managing aquatic habitats, antibiotic use, and social issues, various strategies can be implemented to balance production and conservation, such as integrated fisheries management, spatial zoning, marine protected areas, and promoting sustainable aquaculture practices.sustainable aquaculture can provide immense benefits, including food security, economic growth, and conservation of wild stocks, while minimizing harm to the environment.
            \n
            The Economic Impact of Aquaculture: Job Creation and Growth
            Aquaculture, the farming of aquatic organisms, has become a major economic force, accounting for around 50% of global seafood production. The industry has experienced rapid growth, creating over 800,000 jobs worldwide and providing a diverse source of seafood to meet rising global demand while generating local economic benefits. Job creation is one of the most significant economic impacts resulting from aquaculture production. Additionally, aquaculture promotes environmental stewardship through its use of renewable energy sources and reducing water waste from land-based fish farming operations. The growth of the aquaculture industry is creating jobs around the globe, and it is estimated that one million new aquaculture jobs could be created over a 20-year time span.
            \n
            Climate Change and Aquaculture: Adapting to a Changing Environment
            Aquaculture, the farming of aquatic organisms, is significantly impacted by climate change. Rising temperatures, changes in precipitation patterns, and ocean acidification can reduce production yields or even completely disrupt the industry. To remain successful, aquaculture producers must anticipate and adapt to environmental change. Strategies for adaptation include investing in infrastructure that is resilient to stressors, reducing stocking densities and avoiding overcrowding, and developing climate-smart varieties through genetic selection or improving fish nutrition in ways that mitigate future risks. Diversifying species, raising resistant species or strains, and using climatically resilient culturing practices can also reduce vulnerability. The aquaculture industry can reduce its contribution to climate change through carbon sequestration, renewable energy sources, and improved management practices.
            \n
            The Current Laws & Regulations on Fish Farming 2022
            laws and regulations that govern fish farming in the United States, which are primarily focused on preventing overfishing and ensuring the long-term health of fishery stocks. Fish farmers must obtain a lease or permit from federal, state, or tribal authorities, and comply with all applicable local, state, and federal laws and regulations governing fish farming activities. The Department of Agriculture, the Environmental Protection Agency, and the Food and Drug Administration are the main regulating agencies for fish farming. Failure to follow regulations can result in penalties, including fines, jail time, and loss of a fish farming license.
            \n
            Cleaning and Upkeeping Your Fish Farm (Keeping Your Fish Clean)
            Importance of keeping fish farms clean and well-maintained to prevent the spread of disease, reduce stress in fish, improve efficiency, and maintain the quality of the product. The article provides tips on how to clean a fish farm, common cleaning mistakes to avoid, developing a cleaning schedule, and the best products to use for cleaning and upkeeping. Neglecting to clean and upkeep a fish farm can lead to problems such as disease outbreaks, poor water quality, and low productivity.
            \n
            Things To Consider When Transporting Your Fish Farm
            When transporting a fish farm, several factors need to be considered to ensure that the fish stay healthy and happy during transport. These factors include the size of the fish, the type of water, the climate of the new location, the distance to be covered, and the stability of the water temperature. In addition, an aerator should be added to provide oxygen during transport, and the tanks should not be overcrowded to avoid stressing the fish. Proper monitoring of ammonia levels is also crucial. The cost of transport should be considered include using a live fish shipping service or shipping the fish farm by air, which is cheaper and faster. Careful planning, choosing an experienced transport company, and acclimating the fish before transport are necessary for successful transport.
            \n
            Starting Your Own Fish Farm
            Fish farming, also known as aquaculture, is the practice of breeding, rearing, and harvesting fish for human consumption. The text covers the benefits of fish farming, the types of fish farms, and the necessary equipment and permits. The text also discusses the different types of production systems, including flow-through, recirculating, and raceway systems. The best fish for farming are those in high demand with a short life cycle, such as salmon, tilapia, shrimp, and trout.       
            \n
            The New and Improved Technology Running Fish Farms
            various technologies and advancements used in fish farming, such as new and improved fish feeders, processing machinery, and pond liners. The types of feeders used in fish farming, including automatic, hover, belt, and disc feeders, are also explained. The article highlights how the construction of ponds has become more mechanized, resulting in a decrease in the cost of pond construction and an increase in the number of fish farms. The importance of having the proper technology and equipment, such as aerators, feeders, and pumps, as well as a reliable source of food for the fish, is also emphasized.
            \n
            The Starting Costs of Creating A Fish Farm
            The article discusses the starting costs of creating a fish farm. It highlights the key costs, including land, buildings and infrastructure, and equipment. Employee expenses and the profit margin of fish farms are also discussed. profit margin of a fish farm depends on various factors, such as the type of fish, costs of feed, and selling price. Finally, the article mentions license and regulation requirements and the importance of research and development.
            \n
            Exploring the Role of pH Buffering in Aquaculture Disease Prevention
            pH buffering is an important process in aquaculture disease prevention. By maintaining a stable pH level, fish and other aquatic organisms can thrive and grow, reducing the risk of disease outbreaks. pH buffering helps to reduce the impact of changes in pH that can cause stress and illness in aquatic organisms. It also helps improve water quality and overall health of the aquatic environment. pH buffering can help reduce the amount of chemicals and other treatments needed to keep aquaculture systems healthy, reducing costs and environmental impacts associated with chemical treatments. By maintaining a stable pH level, aquaculture systems can be healthier and more productive, ensuring a sustainable source of seafood for millions of people around the world.
            \n
            Best Practices for Preventing the Introduction of Invasive Species in Small-Scale Aquaculture
            best practices for preventing the introduction of invasive species in small-scale aquaculture. It suggests researching species, using native species whenever possible, monitoring the system regularly, disposing of waste properly, and educating oneself and others.Strategies for controlling invasive species in small-scale aquaculture are outlined, including monitoring and inspecting the system regularly, utilizing physical barriers, chemical treatments, biological controls, manual removal, biocontrols, and integrated pest management. Government regulations emphasizing their role in ensuring safe and responsible aquaculture operations that minimize the risk.
            \n
            Essential Tools for Setting Up a Small Scale Aquaculture System
            essential tools needed to set up a small scale aquaculture system in your backyard, including an aquarium tank, filter, heater, lighting, test kit, gravel, plants, and fish. It also provides tips on choosing the right fish for your aquaculture system, maintaining a healthy system, and maximizing its efficiency through investing in quality equipment, monitoring water quality, and utilizing automation. It emphasizes the importance of regular monitoring, proper nutrition, good water circulation, and cleaning the system to ensure that the aquatic life thrives in the system.
            \n
            How Organic Farming Practices in Aquaponics Can Improve Food Security
            organic farming practices in aquaponics can help improve food security, benefit the environment, and provide cost savings for farmers. Aquaponics combines aquaculture and hydroponics in a closed-loop system that recycles water and fish waste to fertilize plants. Organic farming practices in aquaponics can reduce the need for chemicals and pesticides, lower water usage, reduce waste, increase crop yields, and provide healthier and more nutritious food. The article highlights how aquaponics can be a powerful tool in creating a sustainable and eco-friendly food system.
            \n
            Exploring the Benefits of Natural Pesticides in Aquaculture Disease Prevention
            Natural pesticides are derived from plants and other natural sources, and they are designed to target specific pests without harming the environment or the creatures living in it. Natural pesticides are safer for the environment and aquatic species than traditional chemical pesticides, and they are also more cost-effective in the long run. Natural pesticides can be used in combination with other methods, such as physical barriers and biological control, to further reduce the risk of disease in aquaculture. Using natural pesticides in aquaculture disease prevention is an important step towards creating a more sustainable and healthy food system, and it can help to ensure the health of aquatic species and protect aquatic ecosystems.
            \n
            How Carbon Dioxide Affects Plant Growth in Aquaponics
            Carbon dioxide (CO2) is a critical component in aquaponic systems, as it is necessary for the growth of plants and the health of fish. CO2 is produced by fish through respiration and absorbed by plants for photosynthesis, creating a symbiotic relationship. It helps to increase the pH level of the water, which is important for plant growth and helps to increase oxygen levels, which is important for the health of the fish. Carbon dioxide also helps to reduce the amount of ammonia and nitrates in the water, which can be toxic to the fish. To ensure maximum production, it is important to optimize the carbon dioxide levels in the system, which can be done by ensuring that the water quality is balanced and the CO2 levels are at an optimal level.
            \n
            The Benefits of Quality Assurance for Small Scale Aquaculture Businesses
            Quality assurance is an important process that can help small scale aquaculture businesses to increase their profits, build a strong reputation, improve their customer service, and stay competitive. To implement quality assurance practices, small scale aquaculture businesses need to create a quality assurance plan, create a quality assurance team, create a system for tracking and monitoring the quality of the products and services, and create a system for rewarding employees who demonstrate excellence in quality assurance. Quality assurance can have a positive impact on small scale aquaculture markets by increasing consumer confidence in the products, reducing the risk of food-borne illnesses, and improving the sustainability of the industry.
            \n
            How to Leverage Social Media for Aquaculture Business Promotion
            various ways to promote and grow aquaculture businesses, including leveraging social media, utilizing digital advertising, effective promotion strategies on a budget, and the role of traditional advertising. Social media offers a cost-effective way to reach a larger audience, while digital advertising is measurable, flexible, and powerful. On a budget, aquaculture businesses can use social media, network, offer promotions, create a website, leverage word of mouth, participate in local events, utilize email marketing, invest in quality packaging, and focus on customer service to promote their business.
            \n
            How to Use Technology to Automate Your Aquaculture System
            utomate and monitor aquaculture systems. The use of automated feeders, water quality monitors, automated filtration and lighting systems, and aquaculture management software can help improve efficiency, increase productivity, reduce costs, and ensure the safety of the system. Automated water change systems can help keep the system clean and healthy. The article emphasizes the importance of technology in creating a healthy and productive aquaculture system.
            \n
            How to Design a Small Scale Aquaculture System to Reduce Water Pollution
            provides tips and strategies for designing and maintaining a small-scale aquaculture system that is sustainable and environmentally friendly. The tips include choosing the right location, using natural filtration systems, using a closed-loop system, utilizing natural materials, and monitoring water quality. The article also discusses the use of renewable energy sources to power the aquaculture system and the strategies for minimizing the use of chemicals in the system.
            \n
            The Benefits of Using Small Scale Aquaculture Tools for Harvesting and Processing in Your Backyard
            benefits of using small-scale aquaculture tools for harvesting and processing seafood in your backyard. The benefits include freshness, sustainability, cost savings, and quality control. It also provides tips for choosing the right harvesting and processing tools based on the type and size of the aquaculture system, material, and cost.
            \n
            How to Choose the Right Fish Stocking and Feeding Tools for Your Backyard Aquaculture
            tools required for backyard aquaculture, including fish stocking and feeding, water quality testing, and maintenance. It emphasizes the importance of selecting tools based on the species and size of fish and the water quality required. Automated fish feeders are suggested as a way to save time and money, improve the fish's health, and reduce waste production.fish stocking and feeding tools available, including fish stocking cages, automatic feeders, aeration systems, and various types of fish food.
            \n
            How to Choose the Right Heating and Lighting System Tools for Your Aquaculture Setup
            importance of heating and lighting system tools for aquaculture operations, providing tips for selecting and installing the appropriate system. It highlights the benefits of heating and lighting systems, including precise temperature control, energy cost savings, reduced water waste, and improved seafood quality. The article provides six tips for installing heating and lighting systems, emphasizing planning, organization, and following instructions.
            \n
            The Benefits of Using a Filtration System for Your Backyard Aquaculture
            information on maintaining filtration systems for maximum efficiency and discusses the pros and cons of different types of filtration systems for aquaculture, including mechanical, biological, chemical, and ultraviolet filtration.
            \n
            How to Choose the Right Water Testing Tool for Your Small Scale Aquaculture
            water testing tools for small-scale aquaculture. It emphasizes the importance of selecting the right water testing tool based on factors such as budget, type of fish, ease of use, accuracy, and operation size. Regular water testing can help in monitoring water quality, detecting contaminants, improving water quality, and saving money in the long run. water testing tools available for small-scale aquaculture, including water quality test kits, water temperature gauges, and water flow meters. 
            \n
            The Benefits of Small Scale Aquaculture: How It Can Help Your Local Economy
            small-scale aquaculture, which is the practice of cultivating aquatic organisms in controlled environments. It highlights the benefits of small-scale aquaculture, including its eco-friendliness, cost-effectiveness, and its potential to teach sustainable practices.maximize backyard fish production by choosing the right equipment, creating the right environment, providing the right diet, and regularly monitoring the fish. It also gives an overview of the things to consider before starting a small-scale aquaculture system, including the type of system, the species of fish, the size of the system, and the equipment and supplies needed.
            \n
            Understanding the Basics of Aquaculture Production Planning
            The article discusses essential aspects of aquaculture production planning for a successful aquaculture business. The planning process involves understanding the needs of the aquatic species being raised, the environment in which they are being raised, and planning the production process. To establish an aquaculture business, it is essential to identify the required resources, including the right equipment, personnel, location, financial resources, and understanding of the aquaculture industry. Developing a production schedule involves assessing the current production capacity, setting realistic goals, creating timelines, tracking progress. Establishing a budget for an aquaculture business involves determining start-up costs, operating costs, and potential revenue.
            \n
            How to Implement Waste Management Strategies for Your Small Scale Aquaculture Business
            Implementing effective waste management strategies can help reduce environmental impacts, improve operational efficiency, and save money. The guide outlines the importance of waste management, the types of waste generated by aquaculture businesses, and the steps that can be taken to reduce, reuse, and recycle waste. The first step in developing a waste management plan is to identify the types of waste that your business produces, and then develop strategies for reducing, reusing, and recycling waste. By implementing a waste management system, a small-scale aquaculture business can reduce the amount of waste it produces, protect the environment, improve the quality of its products, and create a more efficient and organized business. reusing and recycling materials, reducing packaging, using sustainable feeds, monitoring water quality, and using natural fertilizers.

        `

        },
        { role: "user", content: prompt }
      ]
      // prompt: prompt,
      // max_tokens: iMaxTokens,
      // user: sUserId,
      // temperature: dTemperature
    };

    // var data = {
    //     model: "text-davinci-003",
    //     prompt: prompt,
    //     temperature: 0.7,
    //     max_tokens: 2048,
    //     top_p: 1,
    //     frequency_penalty: 0,
    //     presence_penalty: 0,
    // };

    data = JSON.stringify(data);

    xhr.send(data);

    // document.querySelector(
    //     "#loader").style.visibility = "visible";

    // 

    // var res = "hi";
    // await axios.get(`https://api.monkedev.com/fun/chat?msg=${req}`).then(data => {
    //     res = JSON.stringify(data.data.response)
    // })


    let message = document.getElementById('msg');


    message.appendChild(container1);
    message.appendChild(container2);

    container1.appendChild(data_req);
    container2.appendChild(data_res);

    document.getElementById('msg_send').value = "";




    function scroll() {
      var scrollMsg = document.getElementById('msg')
      scrollMsg.scrollTop = scrollMsg.scrollHeight;
    }
    scroll();

  }


});
