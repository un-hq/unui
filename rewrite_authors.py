from git_filter_repo import FilterRepo

def email_cb(email):
    # add more old emails in the tuple if needed
    return b'unhq@nahar.tv' if email in (b'naharfhamdan@gmail.com',) else email

def name_cb(name):
    return b'un-hq' if name in (b'theNahar',) else name

FilterRepo(email_callback=email_cb, name_callback=name_cb, force=True).run()
