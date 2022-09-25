function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice)
{
    let brokenHelmets = Math.floor(lostFightsCount / 2);
    let brokenSwords = Math.floor(lostFightsCount / 3);
    let brokenShields = Math.floor(lostFightsCount / 6);
    let brokenArmor = Math.floor(lostFightsCount / 12);

    let spentOnHelmets = helmetPrice * brokenHelmets;
    let spentOnSwords = swordPrice * brokenSwords;
    let spentOnShields = shieldPrice * brokenShields;
    let spentOnArmor = armorPrice * brokenArmor;

    let totalExpenditure = spentOnHelmets + spentOnSwords + spentOnShields + spentOnArmor;

    console.log(`Gladiator expenses: ${totalExpenditure.toFixed(2)} aureus`);


}