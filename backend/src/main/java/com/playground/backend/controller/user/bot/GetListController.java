package com.playground.backend.controller.user.bot;

import com.playground.backend.mapper.BotMapper;
import com.playground.backend.pojo.Bot;
import com.playground.backend.service.user.bot.GetListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GetListController {
    @Autowired
    private GetListService getListService;

    @GetMapping("/user/bot/getlist/")
    public List<Bot> getlist(){
        return getListService.getList();
    }
}
