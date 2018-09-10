'use strict';

/**
 */
module.exports = app => {
    const { router, controller } = app;
    router.resources('163','/index',controller.getIndexJson);
    router.resources('item-detail','/item/detail',controller.getItemDetail);
    router.resources('category','/category',controller.getCategoryId);
    router.resources('category','/xhr/manufacturer',controller.getManufacturer);
    router.resources('category','/xhr/manufacturer/items',controller.getManufacturerItems);
    router.resources('category','/xhr/subCategory',controller.getSubCategoryId);
    router.resources('hotList','/hot_list',controller.getHotList);
    router.resources('host_port','/host_port',controller.getHotspot);
    router.resources('commentTags','/commentTags',controller.commentTags);
    router.resources('comment','/comment',controller.getComment);
    router.resources('top','/topic',controller.getTopic);
    router.resources('cateList','/xhr/cateList',controller.getCateList);
    router.resources('publicKey','/public_key',controller.sendKey);
    router.resources('userDuplicateChecking','/user_duplicate_checking',controller.userDuplicateChecking);
    router.resources('createUser','/register',controller.createUser);
    router.resources('createUser','/login',controller.login);
    router.resources('itemGoodRates','/item_good_rates',controller.gooRates);
    router.delete('/posts/:id',controller.userQuit.destroy);
    router.resources('hotSearch','/hot_search',controller.getHotSearch);
    router.resources('searchResult','/xhr/searchResult',controller.searchResult);
    router.resources('keyWord','/keyWordSearch',controller.getKeywordSearch);
    router.resources('456','/*',controller.index);
};
