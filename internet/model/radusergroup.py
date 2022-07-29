from sqlalchemy import Column, Date, DateTime, Integer, String


class RadiusUserGroup:
    __tablename__ = "radusergroup"

    username = Column(String)
    group_name = Column("groupname", String)
    priority = Column(Integer)
    update_time = Column(DateTime)