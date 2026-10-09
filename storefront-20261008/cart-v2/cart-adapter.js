/* Synchronous checkout handoff. The storefront remains the owner of cart state.
 * resolve(ids) never substitutes, omits or adds products to a requested selection.
 * open(ids) performs exactly one native-tab opening for a supported selection.
 */
(function (root) {
 'use strict';
 const registry=root.GazillionCheckoutRegistry;
 const fail=(reason,message)=>({ok:false,reason,message});
 const own=(object,key)=>Object.prototype.hasOwnProperty.call(object,key);
 function resolve(ids) {
  if(!registry||registry.version!==1)return fail('registry','Checkout could not load. Your cart has been kept.');
  if(!Array.isArray(ids)||!ids.length)return fail('empty','Add a product before checking out.');
  if(ids.some(id=>typeof id!=='string'||!own(registry.products,id)))return fail('unknown','This cart contains a product that is not connected to checkout. Your cart has been kept.');
  if(new Set(ids).size!==ids.length)return fail('duplicate','Please remove the duplicate product before checking out. Your cart has been kept.');
  const products=[...ids].sort();
  const subtotal=products.reduce((sum,id)=>sum+registry.products[id].price,0);
  let url,kind;
  if(products.length===1){url=registry.products[products[0]].checkoutUrl;kind='product';}
  else {
   const key=products.join('|');
   if(!own(registry.combinations,key))return fail('unsupported','Checkout is unavailable for this selection. Your cart has been kept.');
   const entry=registry.combinations[key];
   if(entry.products.join('|')!==key||entry.subtotal!==subtotal)return fail('mismatch','Checkout needs to be checked for this combination. Your cart has been kept.');
   url=entry.checkoutUrl;kind='wishlist';
  }
  const destination=new URL(url);
  if(destination.protocol!=='https:'||!['gumroad.com','gazillionindustries.gumroad.com'].includes(destination.hostname))return fail('destination','Checkout could not load. Your cart has been kept.');
  return {ok:true,kind,url,products,subtotal};
 }
 function open(ids) {
  const result=resolve(ids);
  if(!result.ok)return result;
  // Stay inside the original click event. noopener may intentionally return null;
  // it is not evidence that the browser blocked the new tab.
  root.open(result.url,'_blank','noopener');
  return result;
 }
 function matchesDestination(result,value) {
  if(!result?.ok||typeof value!=='string')return false;
  try {
   const expected=new URL(result.url),actual=new URL(value);
   if(actual.origin!==expected.origin||actual.pathname!==expected.pathname||actual.username||actual.password||actual.hash)return false;
   const attribution=/^(utm_(source|medium|campaign|content|term|id)|gz_(journey|first_days|first_source|first_medium|first_campaign)|ad_id|adset_id|campaign_id|fbclid|referrer)$/;
   const functional=url=>[...url.searchParams].filter(([key])=>!attribution.test(key)).sort((a,b)=>a[0].localeCompare(b[0])||a[1].localeCompare(b[1]));
   if(JSON.stringify(functional(actual))!==JSON.stringify(functional(expected)))return false;
   if(result.kind==='wishlist'&&(!value.endsWith('&recommended_by')||actual.searchParams.getAll('recommended_by').length!==1))return false;
   return true;
  }catch{return false;}
 }
 root.GazillionCheckoutAdapter=Object.freeze({resolve,open,matchesDestination});
})(window);
